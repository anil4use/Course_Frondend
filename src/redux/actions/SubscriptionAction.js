import { server } from "../Store";
import axios from 'axios'
export const SubscribeBuy = () => async dispatch => {
    try {
        dispatch({ type: "buySubscriptionRequest" });
        const { data } = await axios.get(`${server}/subscribe `, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'application/json',

            },
            withCredentials: true
        });

        dispatch({ type: 'buySubscriptionSuccuss', payload: data.subscriptionId })
    } catch (error) {
        dispatch({ type: 'buySubscriptionFail', payload: error.response.data.message })
    }
}
export const CancelSubscription = () => async dispatch => {
    try {
        dispatch({ type: "cancelSubscriptionRequest" });
        const { data } = await axios.delete(`${server}/subscribe/cencel `, {
        
            withCredentials: true
        });

        dispatch({ type: 'cancelSubscriptionSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'cancelSubscriptionFail', payload: error.response.data.message })
    }
}