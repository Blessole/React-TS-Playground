import React, {useRef} from "react";

// useRef를 이용해서 특정 위치로 스크롤 이동하기
// useRef로 DOM에 접근이 가능함 (document.getElementById와 비슷)
const ScrollToTop:React.FC = () => {
    const topRef = useRef(null);

    const scrollToTop = () => {
        if (topRef.current) {
            topRef.current.scrollIntoView({behavior:'smooth'});
        }
    }

    return (
        <div>
            <div ref={topRef} style={{height: "50vh", backgroundColor: "lightblue"}}>페이지 상단</div>
            <div style={{height: "100vh", backgroundColor: "lightgreen"}}>페이지 중단</div>
            <button onClick={scrollToTop}>위로</button>
        </div>
    )
}

export default ScrollToTop