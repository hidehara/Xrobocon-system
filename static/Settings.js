class Settings {
	static getTitle() {
		return "北はりま稲刈りロボコン";
	};
	static getGroup(category) {
		return category == "T" ? "" : "";
	}
	static getNumberOfMatch(category) {
		return category == "T" ? 4 : 0;
	}
	static getNumberOfStage(category) {
		return category == "T" ? 1 : 1;
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
