적용한 기술스택 & 기능 구현 & 문제 해결

React  
Redux  
Redux-meddleware-thunk  
Typescript  
Mui  
Sass  
Axios

카트 드랍다운 만들고 아이템 넣고 삭제해주기.  
같은 아이템 카트에 넣는것 막아주기.  
event.stopPropagation api로 드랍다운 메뉴와 ADD BUTTON, DELETE BUTTON 외 클릭했을때는 드랍다운 메뉴닫기.  
useEffet로 카트내용이 바뀔때마다 로컬스토리지에저장하고 잘 가져오기(타입).  
api데이터 map으로 원하는 형태(Country타입)로 가공해주기.  
momo와 useCallback 활용해보기.

1. 드랍다운 컴포넌트가 mount 될때 DOM에 click 이벤트핸들러 domClick을 등록한다.
2. 드랍다운 컴포넌트에 menuRef를 등록해주고 ref 타입을 넣어준다.
3. domClick이 발생했을때 node.contains 메소드를 활용하여 menuRef가 e.target(클릭된곳)을 포함하지않을 경우 메뉴를 닫는다.
4. 삭제아이콘과 ADD TO CART 버튼이 클릭되었을때 메뉴가 닫히지 않도록 e.stopPropagation() api를 활용한다.
5. 사이드바를 열고닫은뒤 카트버튼을 누르자마자 닫히는 알 수 없는 에러가 발생하여 카트버튼에도 e.stopPropagation()를 달아서 해결해주었다.
6. 드랍다운 컴포넌트가 unmount 될때 domClick이벤트핸들러를 제거해준다.
