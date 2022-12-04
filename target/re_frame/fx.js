// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__1715 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__1716 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__1716);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___1749 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___1749)){
var new_db_1750 = temp__5804__auto___1749;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_1750);
} else {
}

var seq__1717 = cljs.core.seq.call(null,effects_without_db);
var chunk__1718 = null;
var count__1719 = (0);
var i__1720 = (0);
while(true){
if((i__1720 < count__1719)){
var vec__1727 = cljs.core._nth.call(null,chunk__1718,i__1720);
var effect_key = cljs.core.nth.call(null,vec__1727,(0),null);
var effect_value = cljs.core.nth.call(null,vec__1727,(1),null);
var temp__5802__auto___1751 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___1751)){
var effect_fn_1752 = temp__5802__auto___1751;
effect_fn_1752.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__1753 = seq__1717;
var G__1754 = chunk__1718;
var G__1755 = count__1719;
var G__1756 = (i__1720 + (1));
seq__1717 = G__1753;
chunk__1718 = G__1754;
count__1719 = G__1755;
i__1720 = G__1756;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__1717);
if(temp__5804__auto__){
var seq__1717__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1717__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__1717__$1);
var G__1757 = cljs.core.chunk_rest.call(null,seq__1717__$1);
var G__1758 = c__4591__auto__;
var G__1759 = cljs.core.count.call(null,c__4591__auto__);
var G__1760 = (0);
seq__1717 = G__1757;
chunk__1718 = G__1758;
count__1719 = G__1759;
i__1720 = G__1760;
continue;
} else {
var vec__1730 = cljs.core.first.call(null,seq__1717__$1);
var effect_key = cljs.core.nth.call(null,vec__1730,(0),null);
var effect_value = cljs.core.nth.call(null,vec__1730,(1),null);
var temp__5802__auto___1761 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___1761)){
var effect_fn_1762 = temp__5802__auto___1761;
effect_fn_1762.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__1763 = cljs.core.next.call(null,seq__1717__$1);
var G__1764 = null;
var G__1765 = (0);
var G__1766 = (0);
seq__1717 = G__1763;
chunk__1718 = G__1764;
count__1719 = G__1765;
i__1720 = G__1766;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__1513__auto___1767 = re_frame.interop.now.call(null);
var duration__1514__auto___1768 = (end__1513__auto___1767 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__1514__auto___1768,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__1513__auto___1767);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__1715);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___1769 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___1769)){
var new_db_1770 = temp__5804__auto___1769;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_1770);
} else {
}

var seq__1733 = cljs.core.seq.call(null,effects_without_db);
var chunk__1734 = null;
var count__1735 = (0);
var i__1736 = (0);
while(true){
if((i__1736 < count__1735)){
var vec__1743 = cljs.core._nth.call(null,chunk__1734,i__1736);
var effect_key = cljs.core.nth.call(null,vec__1743,(0),null);
var effect_value = cljs.core.nth.call(null,vec__1743,(1),null);
var temp__5802__auto___1771 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___1771)){
var effect_fn_1772 = temp__5802__auto___1771;
effect_fn_1772.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__1773 = seq__1733;
var G__1774 = chunk__1734;
var G__1775 = count__1735;
var G__1776 = (i__1736 + (1));
seq__1733 = G__1773;
chunk__1734 = G__1774;
count__1735 = G__1775;
i__1736 = G__1776;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__1733);
if(temp__5804__auto__){
var seq__1733__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1733__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__1733__$1);
var G__1777 = cljs.core.chunk_rest.call(null,seq__1733__$1);
var G__1778 = c__4591__auto__;
var G__1779 = cljs.core.count.call(null,c__4591__auto__);
var G__1780 = (0);
seq__1733 = G__1777;
chunk__1734 = G__1778;
count__1735 = G__1779;
i__1736 = G__1780;
continue;
} else {
var vec__1746 = cljs.core.first.call(null,seq__1733__$1);
var effect_key = cljs.core.nth.call(null,vec__1746,(0),null);
var effect_value = cljs.core.nth.call(null,vec__1746,(1),null);
var temp__5802__auto___1781 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___1781)){
var effect_fn_1782 = temp__5802__auto___1781;
effect_fn_1782.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__1783 = cljs.core.next.call(null,seq__1733__$1);
var G__1784 = null;
var G__1785 = (0);
var G__1786 = (0);
seq__1733 = G__1783;
chunk__1734 = G__1784;
count__1735 = G__1785;
i__1736 = G__1786;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__1787){
var map__1788 = p__1787;
var map__1788__$1 = cljs.core.__destructure_map.call(null,map__1788);
var effect = map__1788__$1;
var ms = cljs.core.get.call(null,map__1788__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__1788__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__1789 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__1790 = null;
var count__1791 = (0);
var i__1792 = (0);
while(true){
if((i__1792 < count__1791)){
var effect = cljs.core._nth.call(null,chunk__1790,i__1792);
re_frame.fx.dispatch_later.call(null,effect);


var G__1793 = seq__1789;
var G__1794 = chunk__1790;
var G__1795 = count__1791;
var G__1796 = (i__1792 + (1));
seq__1789 = G__1793;
chunk__1790 = G__1794;
count__1791 = G__1795;
i__1792 = G__1796;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__1789);
if(temp__5804__auto__){
var seq__1789__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1789__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__1789__$1);
var G__1797 = cljs.core.chunk_rest.call(null,seq__1789__$1);
var G__1798 = c__4591__auto__;
var G__1799 = cljs.core.count.call(null,c__4591__auto__);
var G__1800 = (0);
seq__1789 = G__1797;
chunk__1790 = G__1798;
count__1791 = G__1799;
i__1792 = G__1800;
continue;
} else {
var effect = cljs.core.first.call(null,seq__1789__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__1801 = cljs.core.next.call(null,seq__1789__$1);
var G__1802 = null;
var G__1803 = (0);
var G__1804 = (0);
seq__1789 = G__1801;
chunk__1790 = G__1802;
count__1791 = G__1803;
i__1792 = G__1804;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__1805 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__1806 = null;
var count__1807 = (0);
var i__1808 = (0);
while(true){
if((i__1808 < count__1807)){
var vec__1815 = cljs.core._nth.call(null,chunk__1806,i__1808);
var effect_key = cljs.core.nth.call(null,vec__1815,(0),null);
var effect_value = cljs.core.nth.call(null,vec__1815,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5802__auto___1821 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___1821)){
var effect_fn_1822 = temp__5802__auto___1821;
effect_fn_1822.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__1823 = seq__1805;
var G__1824 = chunk__1806;
var G__1825 = count__1807;
var G__1826 = (i__1808 + (1));
seq__1805 = G__1823;
chunk__1806 = G__1824;
count__1807 = G__1825;
i__1808 = G__1826;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__1805);
if(temp__5804__auto__){
var seq__1805__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1805__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__1805__$1);
var G__1827 = cljs.core.chunk_rest.call(null,seq__1805__$1);
var G__1828 = c__4591__auto__;
var G__1829 = cljs.core.count.call(null,c__4591__auto__);
var G__1830 = (0);
seq__1805 = G__1827;
chunk__1806 = G__1828;
count__1807 = G__1829;
i__1808 = G__1830;
continue;
} else {
var vec__1818 = cljs.core.first.call(null,seq__1805__$1);
var effect_key = cljs.core.nth.call(null,vec__1818,(0),null);
var effect_value = cljs.core.nth.call(null,vec__1818,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5802__auto___1831 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___1831)){
var effect_fn_1832 = temp__5802__auto___1831;
effect_fn_1832.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__1833 = cljs.core.next.call(null,seq__1805__$1);
var G__1834 = null;
var G__1835 = (0);
var G__1836 = (0);
seq__1805 = G__1833;
chunk__1806 = G__1834;
count__1807 = G__1835;
i__1808 = G__1836;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__1837 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__1838 = null;
var count__1839 = (0);
var i__1840 = (0);
while(true){
if((i__1840 < count__1839)){
var event = cljs.core._nth.call(null,chunk__1838,i__1840);
re_frame.router.dispatch.call(null,event);


var G__1841 = seq__1837;
var G__1842 = chunk__1838;
var G__1843 = count__1839;
var G__1844 = (i__1840 + (1));
seq__1837 = G__1841;
chunk__1838 = G__1842;
count__1839 = G__1843;
i__1840 = G__1844;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__1837);
if(temp__5804__auto__){
var seq__1837__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1837__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__1837__$1);
var G__1845 = cljs.core.chunk_rest.call(null,seq__1837__$1);
var G__1846 = c__4591__auto__;
var G__1847 = cljs.core.count.call(null,c__4591__auto__);
var G__1848 = (0);
seq__1837 = G__1845;
chunk__1838 = G__1846;
count__1839 = G__1847;
i__1840 = G__1848;
continue;
} else {
var event = cljs.core.first.call(null,seq__1837__$1);
re_frame.router.dispatch.call(null,event);


var G__1849 = cljs.core.next.call(null,seq__1837__$1);
var G__1850 = null;
var G__1851 = (0);
var G__1852 = (0);
seq__1837 = G__1849;
chunk__1838 = G__1850;
count__1839 = G__1851;
i__1840 = G__1852;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__1853 = cljs.core.seq.call(null,value);
var chunk__1854 = null;
var count__1855 = (0);
var i__1856 = (0);
while(true){
if((i__1856 < count__1855)){
var event = cljs.core._nth.call(null,chunk__1854,i__1856);
clear_event.call(null,event);


var G__1857 = seq__1853;
var G__1858 = chunk__1854;
var G__1859 = count__1855;
var G__1860 = (i__1856 + (1));
seq__1853 = G__1857;
chunk__1854 = G__1858;
count__1855 = G__1859;
i__1856 = G__1860;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__1853);
if(temp__5804__auto__){
var seq__1853__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1853__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__1853__$1);
var G__1861 = cljs.core.chunk_rest.call(null,seq__1853__$1);
var G__1862 = c__4591__auto__;
var G__1863 = cljs.core.count.call(null,c__4591__auto__);
var G__1864 = (0);
seq__1853 = G__1861;
chunk__1854 = G__1862;
count__1855 = G__1863;
i__1856 = G__1864;
continue;
} else {
var event = cljs.core.first.call(null,seq__1853__$1);
clear_event.call(null,event);


var G__1865 = cljs.core.next.call(null,seq__1853__$1);
var G__1866 = null;
var G__1867 = (0);
var G__1868 = (0);
seq__1853 = G__1865;
chunk__1854 = G__1866;
count__1855 = G__1867;
i__1856 = G__1868;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
