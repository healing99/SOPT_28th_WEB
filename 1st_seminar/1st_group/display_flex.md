## 1st seminar - 조별과제 (css display - flex 관련)

### ◻ flex container에 적용하는 속성들
1. `display : flex`
- 컨테이너를 flex로 설정하면, 아이템들은 자신이 가진 내용물의 width 만큼만 차지하게 됨
- 아이템들이 배치된 방향의 축을 메인축, 메인에 수직인 축을 수직축(교차축)이라고 함
- height 는 컨테이너의 높이만큼 늘어남<br>
    ```css
    .container {
        display: flex;
        height: 100px;
    }
    ```
    <img src="https://user-images.githubusercontent.com/49135797/114216412-d824b200-99a1-11eb-9b10-f0ab1ea0dd9c.png">
    
2. `flex-direction` : 배치 방향 설정<br>
    ```css
    flex-direction: row;
    flex-direction: column;
    flex-direction: row-reverse;
    flex-direction: column-reverse;
    ```
<br> 

3. `flex-wrap` : 줄넘김 처리 설정<br>
    ```css
    flex-wrap: nowrap; /*기본값*/
    flex-wrap: wrap; 
    flex-wrap: wrap-reverse;
    ```
<br>

4. `flex-flow` : flex-direction과 flex-wrap 한번에 지정<br>

    ```css
    flex-flow: row wrap;
    /*동일한 표현*/
    flex-direction : row;
    flex-wrap : wrap;
    ```
<br>

5. 이 외에 `justify-content` , `align-items` 등의 속성으로 아이템들 조정할 수 있음

<br>

### ◻ flex 아이템들에 적용하는 속성들

1. `flex-basis`
- 아이템의 기본 크기를 설정
- 기본값은 auto
- flex-direction이 row인 경우에는 width를, column일때는 높이를 조절<br><br>
  ```css
  flex-basis: auto; /*기본값*/
  flex-basis: 50%;
  flex-basis: 100px;
  ```
  <br>

2. `flex-grow`
- 아이템이 flex-basis의 값보다 커질 수 있는지를 결정
- 기본값은 0
- 0보다 큰 값으로 설정하면 해당 아이템은 유연한 박스로 변함
- flex-basis를 제외한 여백 부분을 flex-grow에 지정된 숫자의 비율로 나누어 가지는 개념 부분을 flex-grow에 지정된 숫자의 비율로 나누어 가지는 개념<br><br>
  ```css
  div:nth-child(1){
      flex-grow: 1;
  }
  div:nth-child(2){
      flex-grow: 2;
  }
  div:nth-child(3){
      flex-grow: 1;
  }
  ```
  <img src="https://user-images.githubusercontent.com/49135797/114216472-eb378200-99a1-11eb-9fb1-c012d92c0f08.png" width="70%">
  <br><br>

3. `flex-shrink` 
- 아이템이 flex-basis의 값보다 작아질 수 있는지를 결정
- 0보다 큰 값이 설정되면 해당 아이템은 유연한 박스로 변하고, flex-basis의 값보다 작아짐
- 기본값은 1이므로, 따로 설정하지 않아도 flex-basis보다 작아질 수 있음
- 0으로 세팅하면 아이템의 크기는 flex-basis보다 작아지지 않기 때문에 고정폭을 만드는데에 용이 <br>
(컨테이너의 크기가 아무리 변해도 해당 아이템의 크기는 변하지 않도록 유지하고 싶은 경우에 사용)<br><br>
  ```css
  span:nth-child(1){
      flex-shrink: 0; 
      width: 50px;
  }
  span:nth-child(2){
      flex: 1;
  }
  ```
  <img src="https://user-images.githubusercontent.com/49135797/114216518-f8547100-99a1-11eb-9485-d3d00186c222.png">

4. `flex` 
- flex-grow, flex-shrink, flex-basis를 한 번에 사용할 수 있는 축약형 속성<br>
  ```css
  span:nth-child(1){
      flex: 1 1 0;
  }
  span:nth-child(2){
      flex: 2 1 0;
  }
  ```
  <img src="https://user-images.githubusercontent.com/49135797/114216568-099d7d80-99a2-11eb-9a77-30dfa99fbd8a.png">
  
  <br><br>
  
---

[References] <br>
https://studiomeal.com/archives/197