import './App.css'
import ClassCounter from './component/ClassComponentLifecycle'
import UseEffectCounter from './component/FuncComponentLifecycle'
import CustomTimer from './component/Timer'
import UserList from './component/UserList'
import UserListAsyncAwait from './component/UserList_AsyncAwait'
import ExpensiveCalc from './component/ExUseMemo_01'
import FilteredList from './component/ExUseMemo_02'
import FocusCounter from './component/ExUseRef'
import ReducerCounter from './component/ExUseReducer_01'
import ReducerLogin from './component/ExUseReducer_02'
import DarkOrLight from './component/ThemeContext_Provider'
import CustomHook_01 from './component/CustomHook_01'
import CustomHook_02 from './component/CustomHook_02'

function App_ClassCounter() {
  return (
    <>
      <ClassCounter count={0}/>
    </>
  )
}

function App_UseEffectCounter() {
  return (
    <>
      <UseEffectCounter/>
    </>
  )
}

function App_UserList() {
  return (
    <>
      <UserList/>
    </>
  )
}

function App_UserListAsyncAwait() {
  return (
    <>
      <UserListAsyncAwait/>
    </>
  )
}

function App_CustomTimer() {
  return (
    <>
      <CustomTimer/>
    </>
  )
}

function App_ExUseMemo() {
  return (
    <>
      <ExpensiveCalc num={3}/>
      <FilteredList/>
    </>
  )
}

function App_FocusCounter() {
  return (
    <>
      <FocusCounter/>
    </>
  )
}

function App_ReducerCounter() {
  return (
    <>
      <ReducerCounter/>
      <ReducerLogin/>
    </>
  )
}

function App_DarkOrLight() {
  return (
    <>
      <DarkOrLight/>
    </>
  )
}

function App() {
  return (
    <>
      <CustomHook_01/>
      <CustomHook_02/>
    </>
  )
}



export default App
