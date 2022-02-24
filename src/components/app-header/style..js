import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;

  .content {
    height: 70px;

    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;
    
    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
      
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

// export const HeaderRight = styled.div`
//   display: flex;
//   align-items: center;
//   color: #ccc;
//   font-size: 12px;


//   .search {
//     width: 158px;
//     height: 32px;
//     border-radius: 16px;

//     input {
//       &::placeholder {
//         font-size: 12px;
//       }
//     }
//   }

//   .center {
//     width: 90px;
//     height: 32px;
//     line-height: 32px;
//     text-align: center;
//     border: 1px solid #666;
//     border-radius: 16px;
//     margin: 0 16px;
//     background-color: transparent;
//   }
// `

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search-wrapper {
    position: relative;

    /* 搜索框 */
    .search {
      width: 221px;
      height: 32px;
      border-radius: 16px;
      
      input {
        font-size: 14px;
        font-family: '微软雅黑';
        &::placeholder {
          font-size: 12px;
        }
      }
    }

    /* icons */
    .icons-wrapper {
      display: flex;

      .ctrl-wrapper {
        background: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
        border-radius: 3px;
        box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
          0 1px 2px 1px rgba(30, 35, 90, 0.4);
        color: rgb(150 159 175);
        display: flex;
        align-items: center;
        height: 20px;
        justify-content: center;
        margin-right: 0.5em;
        padding-bottom: 2px;
        width: 25px;
      }

      .k-wrapper {
        background: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
        border-radius: 3px;
        box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
          0 1px 2px 1px rgba(30, 35, 90, 0.4);
        color: #969faf;
        display: flex;
        align-items: center;
        height: 20px;
        justify-content: center;
        margin-right: 0.6em;
        padding-bottom: 2px;
        width: 25px;
      }
    }

    /* 下拉框 */
    .down-slider {
      position: absolute;
      top: 36px;
      left: 0;
      right: 0;
      width: 237px;
      z-index: 999;
      /* height: 144px; */
      border: 1px solid #bebebe;
      border-radius: 4px;
      background: #fff;
      box-shadow: 0 4px 7px #555;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);

      .search-header {
        height: 35px;
        .discover {
          display: inline-block;
          padding-top: 10px;
          padding-left: 10px;
        }
      }

      .content {
        display: flex;
        border: 1px solid rgb(183, 183, 187);

        .zuo {
          /* float: left; */
          /* height: 100%; */
          width: 65px;
          /* border: 1px solid rgb(183, 183, 187); */
          padding-top: 10px;
          border-bottom: none;

          .song {
            color: #ccc;
            margin-left: 28px;
          }
        }

        .main {
          display: inline-block;
          font-size: 13px;
          line-height: 28px;

          .item {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 168px;
            cursor: pointer;
            height: 35px;
            line-height: 35px;
            color: #000;
            text-indent: 8px;

            &:hover {
              background-color: #ecf0f1;
              border-radius: 5%;
              color: #2ecc71;
            }

            &.active {
              background-color: #ecf0f1;
              color: #2ecc71;
            }
          }
        }
        span.blue {
          color: #7ab3dd;
        }
      }
    }
  }
  .center {
    width: 75px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 13px;
    background-color: transparent;

    &:hover {
      cursor: pointer;
      border-color: #fff;
      color: #fff;
    }
  }

  .login:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .profile-img {
    width: 35px;
    height: auto;
    border-radius: 50%;
  }
`
