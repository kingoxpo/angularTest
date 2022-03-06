"use strict";

const ActionHero = require("actionhero");
const actionhero = new ActionHero.Process();
let api;

describe("loginTest", () => {
  // 모든 테스트 이전 액션 히어로 시작
  beforeAll(async () => {
    api = await actionhero.start();
  });
  // 테스트후 액션 히어로 종료
  afterAll(async () => {
    await actionhero.stop();
  });

  // 진행할 테스트 케이스(케이스 별로 이름을 넣어 구분할 수 있도록 처리)
  test("loginTest: Should return registered user", async () => {
    // api.specHelper 에서 액션을 실행 시키는 함수로 테스트 진행
    const response = await api.specHelper.runAction("loginTest");

    // response.status 의 값이 true 여야 한다.
    expect(response.status[0].pwd).toBe("1111");
    expect(response.status[0].email).toBe("testkr");
  });
});
