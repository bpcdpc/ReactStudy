let hooks: any = [];
let currentIndex = 0;

// React 모듈 안 useState 함수의 내부 구조 이해
function useState<T>(initialValue: T) { // 초기화 값
    const index = currentIndex;

    if (hooks[index] === undefined) { // 값이 없을때
        hooks[index] = initialValue; // 초기화
    }

    // 외부 함수의 변수를 수정해주는 클로저 함수
    function setState(newValue: T) { // 업데이트 값
        hooks[index] = newValue;
        render();
    }

    // 기존 함수(가정)
    function render() {}

    currentIndex++;
    return [hooks[index], setState];
    // 외부 함수의 변수 주소, 변경을 위한 클로저 함수를 unpacking해서 반환
}