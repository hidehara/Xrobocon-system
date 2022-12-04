class Settings {
	static getTitle() {
		return "越前がにロボコン";
	};
	static getGroup(category) {
		return category == "T" ? "エントリー部門" : "歩行部門";
	}
	static getNumberOfMatch(category) {
		return category == "T" ? 8 : 4;
	}
	static getNumberOfStage(category) {
		return category == "T" ? 2 : 1;
	}
	static getPointLabels(){
		return [
			"格納庫出発　+1",
			"闘竜灘　+1",
			"田んぼ到着　+1",
			"レンゲのタネ　+1",
			"田んぼから帰路　+2",
			"先ゴール　+1",
			"レア稲穂　+1",
			"レア稲穂　+1",
			"レア稲穂　+1",
			"激レア稲穂　+1",
			"激レア稲穂　+1",
			"激レア稲穂　+1",
			"格納庫帰還　+2",
		];
	}

}

export { Settings };
