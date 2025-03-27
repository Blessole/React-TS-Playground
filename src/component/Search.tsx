import React, {useRef, useState} from "react";

interface OwnProps {
    text:string,
}

// ref 사용해서 이전 검색어를 저장하고, 검색어가 바뀌었을 때만 api 호출하도록 구현
const Search:React.FC<OwnProps> = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const prevInputValueRef = useRef<string>('');

    const fetchSearch = () => {
        console.log('api 호출 시작');
    }
    const handleSearch = () => {
        // 검색어가 바뀌었을 때만 api 호출
        if(prevInputValueRef.current !== inputValue && inputValue !== '') {
            fetchSearch();
            prevInputValueRef.current = inputValue; // 현재 검색어를 저장
        }

        // input에 focus 주기
        inputEl.current?.focus();
    }

    // input에 focus 주는 방법
    const inputEl = useRef<HTMLInputElement>(null);
    return (
        <div>
            <input type="text" placeholder="검색어를 입력하세요"
            value={inputValue}
                   ref={inputEl}
                   onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSearch}>검색</button>
        </div>
    )
}

export default Search