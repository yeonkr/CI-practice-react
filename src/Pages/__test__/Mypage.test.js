import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestRenderer from "react-test-renderer";

import { Footer } from "../../App";
import Mypage from "../Mypage";
import Tweet from "../../Components/Tweet";
import { dummyTweets } from "../../static/dummyData";

describe("Mypage.js Components", () => {
  test("Mypage 컴포넌트의 자식 컴포넌트로 Tweet 컴포넌트가 있어야 합니다.", () => {
    const mypageInstance = TestRenderer.create(<Mypage dummyTweets={[]} />)
      .root;
      
    const elementList = mypageInstance.findAllByType(Tweet);

    elementList.forEach((el) => {
      expect(el.findByType(Tweet).type).toBe(Tweet);
    });
  });

  test("Mypage 컴포넌트의 자식 컴포넌트로 Footer 컴포넌트가 있어야 합니다.", () => {
    const mypageInstance = TestRenderer.create(<Mypage dummyTweets={[]} />)
      .root;
    expect(mypageInstance.findByType(Footer).type).toBe(Footer);
  });
});

describe("Mypage 데이터 렌더링 테스트", () => {
  test("kimcoding이 작성한 트윗만 보여야 합니다.", () => {
    const { queryByText } = render(<Mypage dummyTweets={[]} />);
    expect(queryByText("kimcoding")).toHaveTextContent(dummyTweets[0].username);
  });
});
