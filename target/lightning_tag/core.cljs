(ns lightning-tag.core
  (:require [reagent.core :as r]
            [react-native :as rn]
            [re-frame.core :as rf]))

(def state (r/atom {:message "hmm."
                    :ct      0}))

(rf/reg-event-db
 :inc-ct
 (fn [db _]
   (update db :ct inc)))

(rf/reg-sub
 :ct
 (fn [db _]
   (:ct db)))

(def view (r/adapt-react-class rn/View))
(def text (r/adapt-react-class rn/Text))

(def text-component
  (fn [& args]
    [text {:onPress #(rf/dispatch [:inc-ct])}
     (let [ct @(rf/subscribe [:ct])]
       (str "Count is: " ct))]))

(defn app-root
  []
  [view {:style {:flex 1 :align-items "center" :justify-content "center"}}
   [text-component]])

(defn ^:export -main
  []
  (r/as-element [app-root]))


;; (r/replace-state r {:mess})
;; (reset! state {:message "hmmmmmmmi."})
