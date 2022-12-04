// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__1535){
var map__1536 = p__1535;
var map__1536__$1 = cljs.core.__destructure_map.call(null,map__1536);
var operation = cljs.core.get.call(null,map__1536__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__1536__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__1536__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__1536__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4160__auto__ = child_of;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__1537_1557 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__1538_1558 = null;
var count__1539_1559 = (0);
var i__1540_1560 = (0);
while(true){
if((i__1540_1560 < count__1539_1559)){
var vec__1549_1561 = cljs.core._nth.call(null,chunk__1538_1558,i__1540_1560);
var k_1562 = cljs.core.nth.call(null,vec__1549_1561,(0),null);
var cb_1563 = cljs.core.nth.call(null,vec__1549_1561,(1),null);
try{cb_1563.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e1552){var e_1564 = e1552;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_1562,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_1564);
}

var G__1565 = seq__1537_1557;
var G__1566 = chunk__1538_1558;
var G__1567 = count__1539_1559;
var G__1568 = (i__1540_1560 + (1));
seq__1537_1557 = G__1565;
chunk__1538_1558 = G__1566;
count__1539_1559 = G__1567;
i__1540_1560 = G__1568;
continue;
} else {
var temp__5804__auto___1569 = cljs.core.seq.call(null,seq__1537_1557);
if(temp__5804__auto___1569){
var seq__1537_1570__$1 = temp__5804__auto___1569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1537_1570__$1)){
var c__4591__auto___1571 = cljs.core.chunk_first.call(null,seq__1537_1570__$1);
var G__1572 = cljs.core.chunk_rest.call(null,seq__1537_1570__$1);
var G__1573 = c__4591__auto___1571;
var G__1574 = cljs.core.count.call(null,c__4591__auto___1571);
var G__1575 = (0);
seq__1537_1557 = G__1572;
chunk__1538_1558 = G__1573;
count__1539_1559 = G__1574;
i__1540_1560 = G__1575;
continue;
} else {
var vec__1553_1576 = cljs.core.first.call(null,seq__1537_1570__$1);
var k_1577 = cljs.core.nth.call(null,vec__1553_1576,(0),null);
var cb_1578 = cljs.core.nth.call(null,vec__1553_1576,(1),null);
try{cb_1578.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e1556){var e_1579 = e1556;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_1577,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_1579);
}

var G__1580 = cljs.core.next.call(null,seq__1537_1570__$1);
var G__1581 = null;
var G__1582 = (0);
var G__1583 = (0);
seq__1537_1557 = G__1580;
chunk__1538_1558 = G__1581;
count__1539_1559 = G__1582;
i__1540_1560 = G__1583;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
