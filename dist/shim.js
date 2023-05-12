// build/worker/shim.mjs
import N from "./f5b30b4478407de622fe39fe721474f15839a353-index.wasm";
var z = Object.defineProperty;
var I = (e, t) => {
  for (var n in t)
    z(e, n, { get: t[n], enumerable: true });
};
var h = {};
I(h, { IntoUnderlyingByteSource: () => A, IntoUnderlyingSink: () => M, IntoUnderlyingSource: () => T, MinifyConfig: () => q, PipeOptions: () => S, PolishConfig: () => Y, QueuingStrategy: () => C, R2Range: () => L, ReadableStreamGetReaderOptions: () => F, RequestRedirect: () => Z, __wbg_buffer_610b70c8fd30da2d: () => dt, __wbg_buffer_cf65c07de34b9a08: () => Jt, __wbg_byobRequest_a3c74c3694777d1b: () => ft, __wbg_byteLength_1fef7842ca4200fa: () => gt, __wbg_byteOffset_ede786cfcf88d3dd: () => lt, __wbg_bytesliteral_efe7d360639bf32b: () => wt, __wbg_call_9495de66fdbe016b: () => $t, __wbg_cf_a70afe2b6e717440: () => ht, __wbg_close_045ed342139beb7d: () => at, __wbg_close_a41954830b65c455: () => it, __wbg_constructor_0c9828c8a7cf1dc6: () => Nt, __wbg_enqueue_3a8a8e67e44d2567: () => ut, __wbg_error_f851667af71bcfc6: () => et, __wbg_get_b883881571048aa2: () => qt, __wbg_get_baf4855f9a986186: () => Ct, __wbg_headers_ab5251d2727ac41e: () => Et, __wbg_instanceof_Error_749a7378f4439ee0: () => Ft, __wbg_latitude_4e2c6213a28a64c7: () => yt, __wbg_length_27a2afe8ab42b09f: () => Kt, __wbg_log_7bb108d119bafbc1: () => kt, __wbg_longitude_71787e3c0f553c34: () => mt, __wbg_method_d1ee174c753ca2be: () => jt, __wbg_name_4e66d4cfa3e9270a: () => Dt, __wbg_new0_25059e40b1c02766: () => zt, __wbg_new_15d3966e9981a196: () => Rt, __wbg_new_9d3a9ce4282a18a8: () => Ht, __wbg_new_abda76e883ba8a5f: () => Q, __wbg_new_f1c3a9c2533a55b8: () => Tt, __wbg_new_f9876326328f45ed: () => Lt, __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5: () => Vt, __wbg_newwithlength_b56c882b57805732: () => Xt, __wbg_newwithoptbuffersourceandinit_4d2fa6d435ff2a63: () => Ot, __wbg_newwithoptreadablestreamandinit_a0b4dc209bd176be: () => Mt, __wbg_newwithoptstrandinit_1a4621d99c54e7c3: () => At, __wbg_region_10ca3fc7adc99274: () => xt, __wbg_resolve_fd40f858d9db1a04: () => Pt, __wbg_respond_f4778bef04e912a6: () => pt, __wbg_set_17499e8aa4003ebd: () => Bt, __wbg_set_6aa458a4ebdb65cb: () => Yt, __wbg_set_a5d34c36a1a4ebd1: () => St, __wbg_stack_658279fe44541cf6: () => tt, __wbg_then_ec5db6d509eb475f: () => Ut, __wbg_toString_4f53179351070600: () => It, __wbg_toString_cec163b212643722: () => Wt, __wbg_url_bd2775644ef804ec: () => vt, __wbg_view_d1a31268af734e5d: () => bt, __wbindgen_cb_drop: () => st, __wbindgen_closure_wrapper943: () => te, __wbindgen_debug_string: () => Zt, __wbindgen_is_undefined: () => ct, __wbindgen_memory: () => Qt, __wbindgen_number_new: () => _t, __wbindgen_object_clone_ref: () => nt, __wbindgen_object_drop_ref: () => G, __wbindgen_string_get: () => ot, __wbindgen_string_new: () => rt, __wbindgen_throw: () => Gt, fetch: () => W, start: () => R });
function $() {
  return "bytes";
}
var H = new WebAssembly.Instance(N, { "./index_bg.js": h });
var r = H.exports;
var l = new Array(128).fill(void 0);
l.push(void 0, null, true, false);
function o(e) {
  return l[e];
}
var m = l.length;
function P(e) {
  e < 132 || (l[e] = m, m = e);
}
function p(e) {
  let t = o(e);
  return P(e), t;
}
function c(e) {
  m === l.length && l.push(l.length + 1);
  let t = m;
  return m = l[t], l[t] = e, t;
}
var U = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var D = new U("utf-8", { ignoreBOM: true, fatal: true });
D.decode();
var k = null;
function v() {
  return (k === null || k.byteLength === 0) && (k = new Uint8Array(r.memory.buffer)), k;
}
function y(e, t) {
  return D.decode(v().subarray(e, e + t));
}
var d = 0;
var J = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var E = new J("utf-8");
var V = typeof E.encodeInto == "function" ? function(e, t) {
  return E.encodeInto(e, t);
} : function(e, t) {
  let n = E.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function g(e, t, n) {
  if (n === void 0) {
    let f = E.encode(e), x = t(f.length);
    return v().subarray(x, x + f.length).set(f), d = f.length, x;
  }
  let _ = e.length, s = t(_), a = v(), u = 0;
  for (; u < _; u++) {
    let f = e.charCodeAt(u);
    if (f > 127)
      break;
    a[s + u] = f;
  }
  if (u !== _) {
    u !== 0 && (e = e.slice(u)), s = n(s, _, _ = u + e.length * 3);
    let f = v().subarray(s + u, s + _);
    u += V(e, f).written;
  }
  return d = u, s;
}
function b(e) {
  return e == null;
}
var j = null;
function i() {
  return (j === null || j.byteLength === 0) && (j = new Int32Array(r.memory.buffer)), j;
}
function O(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null)
    return `${e}`;
  if (t == "string")
    return `"${e}"`;
  if (t == "symbol") {
    let s = e.description;
    return s == null ? "Symbol" : `Symbol(${s})`;
  }
  if (t == "function") {
    let s = e.name;
    return typeof s == "string" && s.length > 0 ? `Function(${s})` : "Function";
  }
  if (Array.isArray(e)) {
    let s = e.length, a = "[";
    s > 0 && (a += O(e[0]));
    for (let u = 1; u < s; u++)
      a += ", " + O(e[u]);
    return a += "]", a;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), _;
  if (n.length > 1)
    _ = n[1];
  else
    return toString.call(e);
  if (_ == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : _;
}
function B(e, t, n, _) {
  let s = { a: e, b: t, cnt: 1, dtor: n }, a = (...u) => {
    s.cnt++;
    let f = s.a;
    s.a = 0;
    try {
      return _(f, s.b, ...u);
    } finally {
      --s.cnt === 0 ? r.__wbindgen_export_2.get(s.dtor)(f, s.b) : s.a = f;
    }
  };
  return a.original = s, a;
}
function K(e, t, n) {
  r._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0f4c7f2aa372efd6(e, t, c(n));
}
function R() {
  r.start();
}
function W(e, t, n) {
  let _ = r.fetch(c(e), c(t), c(n));
  return p(_);
}
function w(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    r.__wbindgen_exn_store(c(n));
  }
}
function X(e, t, n, _) {
  r.wasm_bindgen__convert__closures__invoke2_mut__h0a09f57ba856a283(e, t, c(n), c(_));
}
var Y = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var Z = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var A = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingbytesource_free(t);
  }
  get type() {
    let t = r.intounderlyingbytesource_type(this.ptr);
    return p(t);
  }
  get autoAllocateChunkSize() {
    return r.intounderlyingbytesource_autoAllocateChunkSize(this.ptr) >>> 0;
  }
  start(t) {
    r.intounderlyingbytesource_start(this.ptr, c(t));
  }
  pull(t) {
    let n = r.intounderlyingbytesource_pull(this.ptr, c(t));
    return p(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    r.intounderlyingbytesource_cancel(t);
  }
};
var M = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsink_free(t);
  }
  write(t) {
    let n = r.intounderlyingsink_write(this.ptr, c(t));
    return p(n);
  }
  close() {
    let t = this.__destroy_into_raw(), n = r.intounderlyingsink_close(t);
    return p(n);
  }
  abort(t) {
    let n = this.__destroy_into_raw(), _ = r.intounderlyingsink_abort(n, c(t));
    return p(_);
  }
};
var T = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsource_free(t);
  }
  pull(t) {
    let n = r.intounderlyingsource_pull(this.ptr, c(t));
    return p(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    r.intounderlyingsource_cancel(t);
  }
};
var q = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_minifyconfig_free(t);
  }
  get js() {
    return r.__wbg_get_minifyconfig_js(this.ptr) !== 0;
  }
  set js(t) {
    r.__wbg_set_minifyconfig_js(this.ptr, t);
  }
  get html() {
    return r.__wbg_get_minifyconfig_html(this.ptr) !== 0;
  }
  set html(t) {
    r.__wbg_set_minifyconfig_html(this.ptr, t);
  }
  get css() {
    return r.__wbg_get_minifyconfig_css(this.ptr) !== 0;
  }
  set css(t) {
    r.__wbg_set_minifyconfig_css(this.ptr, t);
  }
};
var S = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_pipeoptions_free(t);
  }
  get preventClose() {
    return r.pipeoptions_preventClose(this.ptr) !== 0;
  }
  get preventCancel() {
    return r.pipeoptions_preventCancel(this.ptr) !== 0;
  }
  get preventAbort() {
    return r.pipeoptions_preventAbort(this.ptr) !== 0;
  }
  get signal() {
    let t = r.pipeoptions_signal(this.ptr);
    return p(t);
  }
};
var C = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_queuingstrategy_free(t);
  }
  get highWaterMark() {
    return r.queuingstrategy_highWaterMark(this.ptr);
  }
};
var L = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_r2range_free(t);
  }
  get offset() {
    try {
      let _ = r.__wbindgen_add_to_stack_pointer(-16);
      r.__wbg_get_r2range_offset(_, this.ptr);
      var t = i()[_ / 4 + 0], n = i()[_ / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set offset(t) {
    r.__wbg_set_r2range_offset(this.ptr, !b(t), b(t) ? 0 : t);
  }
  get length() {
    try {
      let _ = r.__wbindgen_add_to_stack_pointer(-16);
      r.__wbg_get_r2range_length(_, this.ptr);
      var t = i()[_ / 4 + 0], n = i()[_ / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set length(t) {
    r.__wbg_set_r2range_length(this.ptr, !b(t), b(t) ? 0 : t);
  }
  get suffix() {
    try {
      let _ = r.__wbindgen_add_to_stack_pointer(-16);
      r.__wbg_get_r2range_suffix(_, this.ptr);
      var t = i()[_ / 4 + 0], n = i()[_ / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set suffix(t) {
    r.__wbg_set_r2range_suffix(this.ptr, !b(t), b(t) ? 0 : t);
  }
};
var F = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_readablestreamgetreaderoptions_free(t);
  }
  get mode() {
    let t = r.readablestreamgetreaderoptions_mode(this.ptr);
    return p(t);
  }
};
function G(e) {
  p(e);
}
function Q() {
  let e = new Error();
  return c(e);
}
function tt(e, t) {
  let n = o(t).stack, _ = g(n, r.__wbindgen_malloc, r.__wbindgen_realloc), s = d;
  i()[e / 4 + 1] = s, i()[e / 4 + 0] = _;
}
function et(e, t) {
  try {
    console.error(y(e, t));
  } finally {
    r.__wbindgen_free(e, t);
  }
}
function nt(e) {
  let t = o(e);
  return c(t);
}
function rt(e, t) {
  let n = y(e, t);
  return c(n);
}
function _t(e) {
  return c(e);
}
function ot(e, t) {
  let n = o(t), _ = typeof n == "string" ? n : void 0;
  var s = b(_) ? 0 : g(_, r.__wbindgen_malloc, r.__wbindgen_realloc), a = d;
  i()[e / 4 + 1] = a, i()[e / 4 + 0] = s;
}
function st(e) {
  let t = p(e).original;
  return t.cnt-- == 1 ? (t.a = 0, true) : false;
}
function ct(e) {
  return o(e) === void 0;
}
function it(e) {
  o(e).close();
}
function ut(e, t) {
  o(e).enqueue(o(t));
}
function ft(e) {
  let t = o(e).byobRequest;
  return b(t) ? 0 : c(t);
}
function at(e) {
  o(e).close();
}
function bt(e) {
  let t = o(e).view;
  return b(t) ? 0 : c(t);
}
function pt(e, t) {
  o(e).respond(t >>> 0);
}
function dt(e) {
  let t = o(e).buffer;
  return c(t);
}
function lt(e) {
  return o(e).byteOffset;
}
function gt(e) {
  return o(e).byteLength;
}
function wt() {
  let e = $();
  return c(e);
}
function ht(e) {
  let t = o(e).cf;
  return b(t) ? 0 : c(t);
}
function yt(e, t) {
  let n = o(t).latitude;
  var _ = b(n) ? 0 : g(n, r.__wbindgen_malloc, r.__wbindgen_realloc), s = d;
  i()[e / 4 + 1] = s, i()[e / 4 + 0] = _;
}
function mt(e, t) {
  let n = o(t).longitude;
  var _ = b(n) ? 0 : g(n, r.__wbindgen_malloc, r.__wbindgen_realloc), s = d;
  i()[e / 4 + 1] = s, i()[e / 4 + 0] = _;
}
function xt(e, t) {
  let n = o(t).region;
  var _ = b(n) ? 0 : g(n, r.__wbindgen_malloc, r.__wbindgen_realloc), s = d;
  i()[e / 4 + 1] = s, i()[e / 4 + 0] = _;
}
function kt(e) {
  console.log(o(e));
}
function jt(e, t) {
  let n = o(t).method, _ = g(n, r.__wbindgen_malloc, r.__wbindgen_realloc), s = d;
  i()[e / 4 + 1] = s, i()[e / 4 + 0] = _;
}
function vt(e, t) {
  let n = o(t).url, _ = g(n, r.__wbindgen_malloc, r.__wbindgen_realloc), s = d;
  i()[e / 4 + 1] = s, i()[e / 4 + 0] = _;
}
function Et(e) {
  let t = o(e).headers;
  return c(t);
}
function Ot() {
  return w(function(e, t) {
    let n = new Response(o(e), o(t));
    return c(n);
  }, arguments);
}
function At() {
  return w(function(e, t, n) {
    let _ = new Response(e === 0 ? void 0 : y(e, t), o(n));
    return c(_);
  }, arguments);
}
function Mt() {
  return w(function(e, t) {
    let n = new Response(o(e), o(t));
    return c(n);
  }, arguments);
}
function Tt() {
  return w(function() {
    let e = new Headers();
    return c(e);
  }, arguments);
}
function qt() {
  return w(function(e, t, n, _) {
    let s = o(t).get(y(n, _));
    var a = b(s) ? 0 : g(s, r.__wbindgen_malloc, r.__wbindgen_realloc), u = d;
    i()[e / 4 + 1] = u, i()[e / 4 + 0] = a;
  }, arguments);
}
function St() {
  return w(function(e, t, n, _, s) {
    o(e).set(y(t, n), y(_, s));
  }, arguments);
}
function Ct() {
  return w(function(e, t) {
    let n = Reflect.get(o(e), o(t));
    return c(n);
  }, arguments);
}
function Lt() {
  let e = new Object();
  return c(e);
}
function Ft(e) {
  let t;
  try {
    t = o(e) instanceof Error;
  } catch {
    t = false;
  }
  return t;
}
function Rt(e, t) {
  let n = new Error(y(e, t));
  return c(n);
}
function Wt(e) {
  let t = o(e).toString();
  return c(t);
}
function $t() {
  return w(function(e, t, n) {
    let _ = o(e).call(o(t), o(n));
    return c(_);
  }, arguments);
}
function Dt(e) {
  let t = o(e).name;
  return c(t);
}
function zt() {
  let e = new Date();
  return c(e);
}
function It(e) {
  let t = o(e).toString();
  return c(t);
}
function Nt(e) {
  let t = o(e).constructor;
  return c(t);
}
function Ht(e, t) {
  try {
    var n = { a: e, b: t }, _ = (a, u) => {
      let f = n.a;
      n.a = 0;
      try {
        return X(f, n.b, a, u);
      } finally {
        n.a = f;
      }
    };
    let s = new Promise(_);
    return c(s);
  } finally {
    n.a = n.b = 0;
  }
}
function Pt(e) {
  let t = Promise.resolve(o(e));
  return c(t);
}
function Ut(e, t) {
  let n = o(e).then(o(t));
  return c(n);
}
function Jt(e) {
  let t = o(e).buffer;
  return c(t);
}
function Vt(e, t, n) {
  let _ = new Uint8Array(o(e), t >>> 0, n >>> 0);
  return c(_);
}
function Bt(e, t, n) {
  o(e).set(o(t), n >>> 0);
}
function Kt(e) {
  return o(e).length;
}
function Xt(e) {
  let t = new Uint8Array(e >>> 0);
  return c(t);
}
function Yt() {
  return w(function(e, t, n) {
    return Reflect.set(o(e), o(t), o(n));
  }, arguments);
}
function Zt(e, t) {
  let n = O(o(t)), _ = g(n, r.__wbindgen_malloc, r.__wbindgen_realloc), s = d;
  i()[e / 4 + 1] = s, i()[e / 4 + 0] = _;
}
function Gt(e, t) {
  throw new Error(y(e, t));
}
function Qt() {
  let e = r.memory;
  return c(e);
}
function te(e, t, n) {
  let _ = B(e, t, 141, K);
  return c(_);
}
R?.();
var ce = { fetch: W, scheduled: void 0, queue: void 0 };
export {
  A as IntoUnderlyingByteSource,
  M as IntoUnderlyingSink,
  T as IntoUnderlyingSource,
  q as MinifyConfig,
  S as PipeOptions,
  Y as PolishConfig,
  C as QueuingStrategy,
  L as R2Range,
  F as ReadableStreamGetReaderOptions,
  Z as RequestRedirect,
  dt as __wbg_buffer_610b70c8fd30da2d,
  Jt as __wbg_buffer_cf65c07de34b9a08,
  ft as __wbg_byobRequest_a3c74c3694777d1b,
  gt as __wbg_byteLength_1fef7842ca4200fa,
  lt as __wbg_byteOffset_ede786cfcf88d3dd,
  wt as __wbg_bytesliteral_efe7d360639bf32b,
  $t as __wbg_call_9495de66fdbe016b,
  ht as __wbg_cf_a70afe2b6e717440,
  at as __wbg_close_045ed342139beb7d,
  it as __wbg_close_a41954830b65c455,
  Nt as __wbg_constructor_0c9828c8a7cf1dc6,
  ut as __wbg_enqueue_3a8a8e67e44d2567,
  et as __wbg_error_f851667af71bcfc6,
  qt as __wbg_get_b883881571048aa2,
  Ct as __wbg_get_baf4855f9a986186,
  Et as __wbg_headers_ab5251d2727ac41e,
  Ft as __wbg_instanceof_Error_749a7378f4439ee0,
  yt as __wbg_latitude_4e2c6213a28a64c7,
  Kt as __wbg_length_27a2afe8ab42b09f,
  kt as __wbg_log_7bb108d119bafbc1,
  mt as __wbg_longitude_71787e3c0f553c34,
  jt as __wbg_method_d1ee174c753ca2be,
  Dt as __wbg_name_4e66d4cfa3e9270a,
  zt as __wbg_new0_25059e40b1c02766,
  Rt as __wbg_new_15d3966e9981a196,
  Ht as __wbg_new_9d3a9ce4282a18a8,
  Q as __wbg_new_abda76e883ba8a5f,
  Tt as __wbg_new_f1c3a9c2533a55b8,
  Lt as __wbg_new_f9876326328f45ed,
  Vt as __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5,
  Xt as __wbg_newwithlength_b56c882b57805732,
  Ot as __wbg_newwithoptbuffersourceandinit_4d2fa6d435ff2a63,
  Mt as __wbg_newwithoptreadablestreamandinit_a0b4dc209bd176be,
  At as __wbg_newwithoptstrandinit_1a4621d99c54e7c3,
  xt as __wbg_region_10ca3fc7adc99274,
  Pt as __wbg_resolve_fd40f858d9db1a04,
  pt as __wbg_respond_f4778bef04e912a6,
  Bt as __wbg_set_17499e8aa4003ebd,
  Yt as __wbg_set_6aa458a4ebdb65cb,
  St as __wbg_set_a5d34c36a1a4ebd1,
  tt as __wbg_stack_658279fe44541cf6,
  Ut as __wbg_then_ec5db6d509eb475f,
  It as __wbg_toString_4f53179351070600,
  Wt as __wbg_toString_cec163b212643722,
  vt as __wbg_url_bd2775644ef804ec,
  bt as __wbg_view_d1a31268af734e5d,
  st as __wbindgen_cb_drop,
  te as __wbindgen_closure_wrapper943,
  Zt as __wbindgen_debug_string,
  ct as __wbindgen_is_undefined,
  Qt as __wbindgen_memory,
  _t as __wbindgen_number_new,
  nt as __wbindgen_object_clone_ref,
  G as __wbindgen_object_drop_ref,
  ot as __wbindgen_string_get,
  rt as __wbindgen_string_new,
  Gt as __wbindgen_throw,
  ce as default,
  W as fetch,
  R as start
};
//# sourceMappingURL=shim.js.map
