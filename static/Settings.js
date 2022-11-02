class Settings {
	static getTitle() {
		return "岸和田ロボコン";
	};
	static getGroup(category) {
		return category == "T" ? "エントリー部門" : "歩行部門";
	}
	static getNumberOfMatch(category) {
		return category == "T" ? 4 : 4; // 各部門の決勝進出数
	}
}

export { Settings };
