Vue.createApp({
  // データの定義
  data() {
    return {
      score: 75,
      standards: [{
          min: 0,
          max: 10,
          range: "0〜10%",
          grade: "🌞",
          status: "晴れ",
          color: "🌞",
          advice: "傘は基本的に必要ありません。安心して外出できるでしょう。"
        },
        {
          min: 10,
          max: 30,
          range: "10～30%",
          grade: "🌤",
          status: "晴れ～曇り",
          color: "🌤",
          advice: "雨が降る可能性は低いですが心配なら折り畳み傘をもっていきましょう。"
        },
        {
          min: 30,
          max: 50,
          range: "30～50%",
          grade: "☁",
          status: "曇り",
          color: "☁",
          advice: "急な雨に備えて折りたたみ傘があると安心です。"
        },
        {
          min: 50,
          max: 70,
          range: "50～70%",
          grade: "🌧",
          status: "曇り～雨",
          color: "🌧",
          advice: "雨が降る可能性があります。傘があると安心です。"
        },
        {
          min: 70,
          max: 101,
          range: "80〜100%",
          grade: "☔",
          status: "雨",
          color: "☔",
          advice: "雨が降る可能性が非常に高いです。大きめの傘を持っていくといきましょう。"
        },
      ]
    };
  },

  // 算出プロパティ
  computed: {
    // 点数に該当する評価を取得
    currentStandard() {
      return this.standards.find(item =>
        this.score >= item.min && this.score < item.max
      );
    },

    // 評価を取得
    grade() {
      return this.currentStandard?.grade || "-";
    },

    // 判定を取得
    status() {
      return this.currentStandard?.advice || "0～100の範囲で点数を入力してください";
    },

    // 合格ラインまでの差を算出
    differenceMessage() {
      const difference = 60 - this.score;

      if (difference > 0) {
        return `合格ラインまであと${difference}点です`;
      }

      return "合格ラインをクリアしています";
    }
  }
}).mount("#app")