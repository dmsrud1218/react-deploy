# react-deploy

## 0단계- 기본 코드 준비

## 1단계 - API 명세 협의 & 반영

### 기능 요구사항

작성한 API 문서를 기반으로 팀 내에서 지금까지 만든 API를 검토하고 통이랗여 변경 사항을 반영한다.

-[x] 팀 내에서 일관된 기준을 정하여 API 명세를 결정한다.

- [x] 상품 옵션 API 추가 구현

- 때로는 클라이언트의 편의를 위해 API 명헤를 결정하는 것이 좋다.
- 팀 내에 배포 도리 API가 여러개 일 경우 상단 네비게이션 바에서 선택 가능하게 한다.
  - 프론트엔드의 경우 배포와 사용자가 팀 내 여러 서버 중 하나를 선택하여 서비스를 이용
    - 팀내 백엔드 엔지니어의 이름을 넣고, 이름을 선택하면 해당 엔지니어의 API로 API 통신을 하게한다.
    - 기본 선택은 제일 첫번째 이릉으로 한다.

## 2단계 - 배포하기

- github pages를사용해서 배포한다