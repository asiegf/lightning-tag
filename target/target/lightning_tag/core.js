// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('lightning_tag.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
lightning_tag.core.node$module$react_native = require('react-native');
lightning_tag.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"hmm.",new cljs.core.Keyword(null,"ct","ct",2136438941),(0)], null));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-ct","inc-ct",1434497852),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"ct","ct",2136438941),cljs.core.inc);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"ct","ct",2136438941),(function (db,_){
return new cljs.core.Keyword(null,"ct","ct",2136438941).cljs$core$IFn$_invoke$arity$1(db);
}));
lightning_tag.core.view = reagent.core.adapt_react_class.call(null,lightning_tag.core.node$module$react_native.View);
lightning_tag.core.text = reagent.core.adapt_react_class.call(null,lightning_tag.core.node$module$react_native.Text);
/**
 * @param {...*} var_args
 */
lightning_tag.core.text_component = (function() { 
var lightning_tag$core$text_component__delegate = function (args){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightning_tag.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onPress","onPress",-1383694171),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-ct","inc-ct",1434497852)], null));
})], null),(function (){var ct = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ct","ct",2136438941)], null)));
return ["Count is: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ct)].join('');
})()], null);
};
var lightning_tag$core$text_component = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9419__i = 0, G__9419__a = new Array(arguments.length -  0);
while (G__9419__i < G__9419__a.length) {G__9419__a[G__9419__i] = arguments[G__9419__i + 0]; ++G__9419__i;}
  args = new cljs.core.IndexedSeq(G__9419__a,0,null);
} 
return lightning_tag$core$text_component__delegate.call(this,args);};
lightning_tag$core$text_component.cljs$lang$maxFixedArity = 0;
lightning_tag$core$text_component.cljs$lang$applyTo = (function (arglist__9420){
var args = cljs.core.seq(arglist__9420);
return lightning_tag$core$text_component__delegate(args);
});
lightning_tag$core$text_component.cljs$core$IFn$_invoke$arity$variadic = lightning_tag$core$text_component__delegate;
return lightning_tag$core$text_component;
})()
;
lightning_tag.core.app_root = (function lightning_tag$core$app_root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightning_tag.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightning_tag.core.text_component], null)], null);
});
lightning_tag.core._main = (function lightning_tag$core$_main(){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightning_tag.core.app_root], null));
});
goog.exportSymbol('lightning_tag.core._main', lightning_tag.core._main);

//# sourceMappingURL=core.js.map
