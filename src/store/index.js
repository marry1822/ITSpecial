import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";

const {
	SET_INFO_FROM_API_TO_STATE,
	SET_SELECTED_ROW_INFO_TO_STATE,
} = mutations;

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		info: [],
		selectedRowInfo: {},
	},
	getters: {
		INFO(state) {
			return state.info;
		},
		SELECTED_ROW_INFO(state) {
			return state.selectedRowInfo;
		},
	},
	actions: {
		GET_INFO_FROM_API({ commit }) {
			return axios
				.get(
					"http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}"
				)
				.then((info) => {
					commit("SET_INFO_FROM_API_TO_STATE", info.data);
					return info;
				});
		},
		GET_SELECTED_ROW_INFO({ commit}, selectedRowInfo) {
			commit("SET_SELECTED_ROW_INFO_TO_STATE", selectedRowInfo);
		},
	},
	mutations: {
		[SET_INFO_FROM_API_TO_STATE](state, info) {
			state.info = info;
		},
		[SET_SELECTED_ROW_INFO_TO_STATE](state, selectedRowInfo) {
			state.selectedRowInfo = selectedRowInfo;
		},
	},
});

export default store;
window.store = store;
