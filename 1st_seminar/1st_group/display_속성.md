## 1st seminar - 조별과제 (css display 관련)

### 🧐 CSS의 display 속성이란?

: display 속성은 웹 페이지의 레이아웃을 결정하는 css의 중요한 속성 중 하나임<br>
즉, 해당 HTML 요소가 브라우저에 언제 어떻게 보이는가를 결정<br>
우선 block과 inline에 대해서 간단히 알아보자.<br>
<br> 
### 🧐 block 과 inline이란?

div는 기본값이 block이고, span은 inline임<br>
div는 width가 컨테이너의 100%를 차지. 즉, 가로 한 줄을 다 차지하게 됨<br>
반면 span은 내용을 딱 감쌀 정도의 크기만을 가짐. block 태그와 다르게 줄바꿈이 되지 않고 컨텐츠를 감싸는 정도의 크기만 가지며, 이 크기를 변화시킬 수 없다는 것이 특징<br>
```css
.div-style{
    background-color:pink;
}

.span-style{
    background-color: yellow;
    /*width : 200px; 크기 조정 불가능*/
}
```

<img src="https://user-images.githubusercontent.com/49135797/114214961-f7badb00-999f-11eb-9458-4bededab9efe.png" height="100px" width="100%">


### 🧐 display 대표적인 속성

1. `display : none`
  - 말그대로 없애버리는 것 (영역도 차지안함)
  - 주로 탭 메뉴나 드롭다운 메뉴처럼 없어졌다 나타나는 기능을 구현할 때 잠시 숨겨놓는 용도로 사용
  - `visibility : hidden` 은 보이지는 않아도 영역을 차지하는 반면, `display : none` 은 영역을 차지하지도 않음

    <img src="https://user-images.githubusercontent.com/49135797/114215039-14efa980-99a0-11eb-921e-fc163524c4c8.png" width="250px" height="120px">
    <img src="https://user-images.githubusercontent.com/49135797/114215232-52543700-99a0-11eb-8fcd-0e7bfc22182a.png" width="250px" height="120px">

2. `display : block`
  - width가 컨테이너의 100%를 차지함
  - 항상 새로운 라인에서 시작, 줄바꿈
  - inline과 다르게 width, height, margin, padding 프로퍼티 지정이 가능
  - \<div> \<h1> \<p> \<ul> \<ol> \<form>이 대표적인 block 요소<br><br>
    ```css
    .div-style{
      display: block; /*기본값*/
      background-color: gold;
    }
    ```
    <img src="https://user-images.githubusercontent.com/49135797/114215360-7b74c780-99a0-11eb-821e-0b411e279565.png">

3. `display : inline`
  - 내용을 딱 감쌀 정도의 크기를 가짐
  - block 태그와 다르게 줄바꿈이 되지 않고 컨텐츠를 감싸는 정도의 크기만 가짐
  - width, height, margin-top, margin-bottom과 같은 프로퍼티를 지정할 수 없음
      → 상하 여백을 조절하고 싶을때는 line-height을 이용
  - \<span> \<a> \<img> \<input>이 대표적인 inline요소<br><br>
    ```css
    .div-style{
      display: inline;
      background-color: gold;
    }
    ```
    <img src="https://user-images.githubusercontent.com/49135797/114215996-474dd680-99a1-11eb-89e9-fbf8c2f4e77d.png" width="100%">

4. `display : inline-block`
  - inline과 block의 특성을 합쳐놓은 개념. 기본적으로 inline 속성을 지니지만 임의로 크기를 변화시킬 수 있음
  - 줄바꿈이 되지 않음
  - block 처럼 width와 height 지정 가능하고, 지정하지 않을 경우에는 inline과 같이 컨텐츠만큼만 영역이 잡힘
  - 예를 들어, height 값은 동일하지만, width 값이 서로 다른 <span> 태그 만들고 싶을 때 사용<br><br>
    ```css
    .span-style{ 
      background-color: gold;
      display: inline-block;
      height: 50px;
    }
    ```
    <img src="https://user-images.githubusercontent.com/49135797/114216260-a4e22300-99a1-11eb-9071-00e01a235576.png">

5. `display : flex` <br><br>

### 🧐 visibility 속성

요소를 보이게 할 것인지 보이지 않게 할 것인지를 정의함. 즉 요소의 렌더링 여부를 결정

1. `visibility : visible` (기본값)
2. `visibility : hidden`
    - 해당 요소를 보이지 않게 함
    - 다만 영역은 차지하게 됨
3. `visibility : collapse`
    - table 요소에 사용하며, 행이나 열을 보이지 않게 함
4. `visibility : none` <br><br>

### 🧐 opacity 속성

요소의 투명도를 정의. 0.0 ~ 1.0의 값으로 투명도를 결정. 0.0에 가까울수록 투명하고, 1.0으로 갈수록 불투명

<br><br>

---

[References]

[https://www.w3schools.com/cssref/pr_class_display.asp](https://www.w3schools.com/cssref/pr_class_display.asp)

[https://poiemaweb.com/css3-display](https://poiemaweb.com/css3-display)

[https://studiomeal.com/archives/197](https://studiomeal.com/archives/197)