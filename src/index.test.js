import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

describe("MyPage 데이터 렌더링 테스트", () => {
  test("kimcoding이 작성한 트윗만 보여야 합니다.", () => {
    const { queryByText } = render(<MyPage dummyTweets={[]} />);
    expect(queryByText("kimcoding")).toHaveTextContent(dummyTweets[0].username);
  });
});
