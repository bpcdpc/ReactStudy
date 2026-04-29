import MainContext from "./ThemeContext_Main";

// Context 사용하지 않음
export default function MiddleContext() {
    return (
        <div style={{ background: 'gray', padding: '20px' }}>
            <h1>이것은 Middle입니다.</h1>
            <MainContext/>
        </div>
    );
}