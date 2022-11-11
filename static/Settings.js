class Settings {
	static getTitle() {
		return "岸和田ロボットプログラミングコンテスト";
	};
	static getGroup(category) {
		return category == "T" ? "エントリー部門" : "歩行部門";
	}
	static getNumberOfMatch(category) {
		return category == "T" ? 8 : 4; // 各部門の決勝進出数, エントリーのみ利用, 歩行は仮
	}
}

export { Settings };
