1. 과거 함수형 컴포넌트는 state값을 가질 수가 없었다.
2. 과거 함수형 컴포넌트는 라이프 사이클 관련 작업을 처리할 수 없었다.
    
    ⇒ 업데이트되면서 Hook이 생겼는데 이를 이용하여 라이플 사이클 및 state를 처리할 수 있게 됨
    
3. 함수형 컴포넌트에서는 return을 하면 됨 
    
    ⇒ 함수형 컴포넌트는 자기 자신이 render 함수가 되는 것
    
4. 클래스형 컴포넌트는 render라는 함수 즉 메소드를 정의해서 render 함수의 리턴 값이 UI가 됨
5. useState 리턴 값은 배열로 나오는데 2개로 이루어짐
    
    ⇒ 첫번째는 state 값, 두번째는 state 값을 변경하는 함수
    
6. 클래스형 컴포넌트는 state가 업데이트되면 react가 클래스의 render 메소드를 호출
7. 변수명을 작성할 때 키워드일 가능성이 있는 것은 _(언더바)를 앞에 추가
8. React Life Cycle(Class)
    
    ⇒ ComponentWillMount() - 컴포넌트가 생성되기 전에(render) 처리해야 할 일
    
    ⇒ ComponentDidMount() - 컴포넌트가 생성되고 난 후 처리해야 할 일
    
    ⇒ shouldComponentUpdate - true면 render 호출 false 호출 X
    
    ⇒ componentWillUpdate - 상태 업데이트가 되기전에
    
    ⇒ componentDidUpdate - 상태 업데이트가 끝났을 때
    
    ⇒ componentWillUnmount - 컴포넌트 사라질 때
    
    - ComponentWillMount → render → ComponentDidMount ⇒ 초기 화면 라이프 사이클
    - shouldComponentUpdate  → componentWillUpdate → render → componentDidUpdate ⇒ 상태가 변했을 때 라이프 사이클
        
        ⇒ 상태가 변한 컴포넌트를 render
        
9. React Life Cycle(Function)
    
    ⇒ 함수형 컴포넌트에서는 return 하는 부분이 main effect
    
    ⇒ useEffect - side effect가 생략된 말(부가적인 작용: axios, )
    
    ```jsx
    useEffect(function () {
        console.log('%cfunc => useEffect '+(++funId), funStyle)
    })
    
    // render가 끝날 때마다 실행
    // ComponentDidMount(), componentDidUpdate()와 동일
    ```
    
10. Clean up
    
    ```jsx
    // side effect가 생략된 말
    useEffect(function () {
      console.log('%cfunc => useEffect (ComponentDidMount & componentDidUpdate) ' + (++funId), funStyle)
      document.title = number + ' : ' + _date;
      return function () {
        console.log('%cfunc => useEffect return (ComponentDidMount & componentDidUpdate) ' + (++funId), funStyle)
      }
    })
    
    // componentWillUnmout와 같은 효과
    ```
    
11. 특정 상태를 추적하여 그 상태가 변경되었을 때
    
    ```jsx
    // side effect가 생략된 말
      useEffect(function () {
        console.log('%cfunc => useEffect (ComponentDidMount & componentDidUpdate) ' + (++funId), funStyle)
        document.title = number;
        return function () {
          console.log('%cfunc => useEffect return (ComponentDidMount & componentDidUpdate) ' + (++funId), funStyle)
        }
      }, [number])
    
    // 배열안에 넣어주면 됨
    ```
    
12. useEffect에서 return(Clean Up)은 이전의 실행을 취소하기 위해 먼저 실행
13. ComponentDidMout만 하고 싶을 경우
    
    ```jsx
    // side effect가 생략된 말
      useEffect(function () {
        console.log('%cfunc => useEffect number (ComponentDidMount) ' + (++funId), funStyle)
        document.title = number;
        return function () {
          console.log('%cfunc => useEffect return (ComponentWillUnMount) ' + (++funId), funStyle)
        }
      }, [])
    
    // 배열에 빈배열로 두면 됨
    // return은 ComponentWillUnMount
    ```
    

초기 프로젝트에서 필요없는 부분

1. index.css, App.css 내용
2. App.js에서 import logo from './logo.svg'; 제거