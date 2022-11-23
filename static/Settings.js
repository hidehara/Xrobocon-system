class Settings {
	static getTitle() {
		return "岸和田ロボットプログラミングコンテスト";
	};
	static getGroup(category) {
		return category == "T" ? "エントリー部門" : "歩行部門";
	}
	static getNumberOfMatch(category) {
		return category == "T" ? 8 : 4;
	}
}

export { Settings };
