class Settings {
	static getTitle() {
		return "岸和田ロボコン";
	};
	static getGroup(category) {
		return category == "T" ? "エントリー部門" : "歩行部門";
	}
	static getNumberOfMatch(category) {
		return category == "T" ? 8 : 8; // 2021 両方8
	}
}

export { Settings };
