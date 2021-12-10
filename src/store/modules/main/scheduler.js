import moment from 'moment' // eslint-disable-line no-unused-vars

const scheduler = {
  namespaced: true,
  state() {
    return {
      selectedDate : null,
            showAllDayEvents: 0,  
            shortEventsOnMonthView: false,
            showEventCreationDialog: false,
            changeTheme : false,
            changeLang : false,
            isModal : false,
            callAddFunction : false,
            
            // modal variables
            flagStartDate : false,
            flagEndDate : false,

            autoScrollData1 : '',
            autoScrollData2 : '',
            endDate : '',
            startDate :'',
            eventTitle : '',
            eventContent : '',
            selectedClass : '',
            
            clickedValue : '공통',

            isAllDay : '',
            deleteflag : '',
            resizeflag : '',

            buttonText : [
              '공통',
              '개인',
              '공지',
              '긴급',
              '휴가',
              '기타'
            ],

            data :[
                {
                start: '2021-12-09 11:15',
                end: '2021-12-09 15:15',
                title: '테스트일정 제목',
                content: '테스트일정 내용',
                class: 'common',
                deletable: true,
                resizable: true,
                draggable: true,
                allDay : false
              },
            ],
    }
  },
  mutations: {
    showData(state){
      console.log(state.addEventData)
    },

    sendselectDate(state, event){
      state.selectedDate = event
      return state.selectedDate;
    },

    setModal(state){
      state.isModal = true
    },
    
    closeModal(state, e){
      for(let i in e.target.classList){
        if(e.target.classList[i] === 'black-bg' || e.target.classList[i] === 'closeModalBtn'){
          state.isModal = false
        }else{
          return
        }
      }
    },

    setCallAddFunction(state, e){
      console.log(e)
      state.callAddFunction = !state.callAddFunction
      if(state.callAddFunction) {
        state.isModal = false
      }
    },
    setClickedValue(state, e){
      console.log(e)
      state.clickedValue = e
    },
    setFlagStartDate(state,  e){
      console.log(e)
      state.flagStartDate = e
    },
    setflagEndDate(state,  e){
      console.log(e)
      state.flagEndDate = e
    },
    getStartDate(state, e){
      state.flagStartDate = !state.flagStartDate
      state.startDate = e.format('YYYY-MM-DD')
    },
    getEndDate(state,e){
      state.flagEndDate = !state.flagEndDate
      state.endDate = e.format('YYYY-MM-DD')
    },
    setModalTrue(state){
      state.isModal = true
    },
    setModalFalse(state){
      state.isModal = false
    },
    createEventUseModal(state){
      switch (state.clickedValue) {
        case '공통':
          state.clickedValue = 'common'   
          break;
        case '개인':
          state.clickedValue = 'individual'   
          break;
        case '공지':
          state.clickedValue = 'notice'   
          break;
        case '긴급':
          state.clickedValue = 'Emergency'   
          break;
        case '휴가':
          state.clickedValue = 'vacation'   
          break;
        case '기타':
          state.clickedValue = 'note'   
          break;
      }

      if(state.isAllDay !== true){
        state.isAllDay = false
      }

      if(state.deleteflag === ''){
        state.deleteflag = true
      }else{
        state.deleteflag = false
      }

      if(state.resizeflag === ''){
        state.resizeflag = true
      }else{
        state.resizeflag = false
      }
      
      // 시작날이 end날 보다 최신이면 return?
      // 시작시간 == 끝나는 시간 안되게 

      if(state.autoScrollData1 === state.autoScrollData2
       || state.autoScrollData1 > state.autoScrollData2){
        return
      }
    
      const arr ={
        id : 'a002',
        start : state.startDate +' '+ state.autoScrollData1,
        end : state.endDate + ' ' + state.autoScrollData2,
        title : state.eventTitle,
        content : state.eventContent,
        class : state.clickedValue,
        deletable: state.deleteflag,
        resizable: state.resizeflag,
        draggable: true,
        allDay : state.isAllDay,

      }

      console.log(arr)
      state.data.push(arr)
      console.log('data => ', state.data )
      // state.isModal = false
      this.setModalFalse()
    },
  },
}

export default scheduler