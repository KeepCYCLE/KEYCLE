export default class Statistics {
  saveIncorrectRate(incorrectRate) {
    localStorage.setItem('incorrectRate', JSON.stringify(incorrectRate));
  }

  updateChallengerCount(challenger) {
    const challengerCount = document.getElementById('challenger-count');
    challengerCount.textContent = challenger;
  }

  getStatistics() {
    return fetch('3.37.238.149/stats/incorrectRate')
      .then((response) => {
        if (!response.ok) {
          throw new Error('서버에서 데이터를 가져오지 못했습니다.');
        }
        return response.json();
      })
      .then((data) => {
        const challenger = data[0];
        const incorrectRate = data.slice(1);
        this.saveIncorrectRate(incorrectRate);
        this.updateChallengerCount(challenger);
        return { challenger, incorrectRate };
      })
      .catch((error) => {
        console.error('데이터 가져오기 실패:', error);
      });
  }
}