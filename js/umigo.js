// 움이고 공용 설정 · Supabase RPC 호출
const UMIGO = {
  url: 'https://pxngcnxirokoykrfjokq.supabase.co',
  key: 'sb_publishable_UVY9jzgohteWWHqtUOjfyA_qel1FkKI',
  site: 'https://kshinmyoung.github.io/umigo/',
  img(id) { return 'assets/kinds/' + id + '.png'; },
  async rpc(name, args) {
    const res = await fetch(this.url + '/rest/v1/rpc/' + name, {
      method: 'POST',
      headers: { 'apikey': this.key, 'Content-Type': 'application/json' },
      body: JSON.stringify(args || {})
    });
    const text = await res.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch (e) { data = text; }
    if (!res.ok) {
      const msg = (data && data.message) || ('HTTP ' + res.status);
      const err = new Error(msg); err.status = res.status; err.data = data; throw err;
    }
    return data;
  },
  dist(a, b) {
    const R = 6371000, r = x => x * Math.PI / 180;
    const dLat = r(b.lat - a.lat), dLng = r(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  },
  esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); },
  store: {
    get(k) { try { return localStorage.getItem('umigo_' + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem('umigo_' + k, v); } catch (e) {} },
    del(k) { try { localStorage.removeItem('umigo_' + k); } catch (e) {} }
  },
  colorWord(c) {
    return ({ '#1F8FCF': '하늘색', '#6E7F95': '회색', '#E8705A': '코랄색', '#2F4D8C': '남색', '#E0A100': '황금색' })[c] || '';
  }
};
