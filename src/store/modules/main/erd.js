import erdData from '../../../assets/erdData.json'

const erd = {
  namespaced: true,
  state: {
    erdData: erdData,
    relation: {
      primaryKey: {},
      foreignKey: {}
    },
    sideBarData: {
      topData: [],
      title: "ERD",
      path: "/pdtail/erdview/erd",
      textColor: "#fff",
    },
    writeData: {
      popupName: "addTable",
      isOpen: false,
      tableData: {
        name: "",
        columns: [
          {
            name: "",
            type: "",
            constraint: ""
          }
        ]
      }
    },
  },
  mutations: {
    openAndClose(state) {
      state.writeData.isOpen = !state.writeData.isOpen
      state.writeData.popupName = state.writeData.isOpen ? "close" : "addTable"
    },
    addCol(state) {
      state.writeData.tableData.columns.push({
        name: "",
        type: "",
        constraint: ""
      })
    },
    delCol(state) {
      state.writeData.tableData.columns.pop()
    },
    createTable(state) {
      const table = state.writeData.tableData
      state.sideBarData.topData.push(table)
      state.writeData.tableData = {
        name: "",
        columns: [
          {
            name: "",
            type: "",
            constraint: ""
          }
        ]
      }
    },
    deleteTable(state, index) {
      state.sideBarData.topData.splice(index, 1)
    },
    showModify(state, item) {
      state.sideBarData.topData.find(ele => ele.idx === item.idx).isModify = true
    },
    cancel(state, item) {
      const originData = JSON.parse(JSON.stringify(state.erdData))
      const beforeData = originData.find(ele => ele.idx === item.idx)
      
      state.sideBarData.topData.find(ele => ele.idx === beforeData.idx).isModify = false
      state.sideBarData.topData.find(ele => ele.idx === beforeData.idx).name = beforeData.name
      state.sideBarData.topData.find(ele => ele.idx === beforeData.idx).columns = beforeData.columns
    },
    modifyTable(state, item) {
      // axios로 백단으로 쏴서 저장

      state.sideBarData.topData.find(ele => ele.idx === item.idx).isModify = false
    },
    addErdData(state) {
      state.sideBarData.topData = JSON.parse(JSON.stringify(state.erdData))
    },
    setRelation(state) {
      const primary = {}
      const foreign = {}

      const tables = JSON.parse(JSON.stringify(state.erdData))

      for(let item of tables) {
        const pk = []
        const references = new Set()
        const tableIdx = item.idx
        
        for(let col of item.columns) {
          if(col.constraint === 'pk') {
            pk.push(col)
          }

          if(col.references !== null) {
            references.add(col.references)
          }
        }

        primary[tableIdx] = pk
        foreign[tableIdx] = Array.from(references)
      }

      state.relation["primaryKey"] = primary
      state.relation["foreignKey"] = foreign
    },
    exportQuery(state) {
      const tables = state.sideBarData.topData
      const primary = JSON.parse(JSON.stringify(state.relation.primaryKey))
      const foreign = JSON.parse(JSON.stringify(state.relation.foreignKey))

      // 테이블 생성
      const createTable = []
      for(let table of tables) {
        let sql = `create table ${table.name} (`

        for(let col of table.columns) {
          sql += `${col.name} ${col.type}, `
        }
        
        sql = sql.substring(0, sql.length - 2) + ");"
        createTable.push(sql)
      }

      // 기본키 생성
      const createPrimary = []
      for(let key of Object.keys(primary)) {
        const customId = `pk_${primary[key][0].table}`
        let sql = `alter table ${primary[key][0].table} constraint `
        sql += `${customId} add primary key(`
        
        for(let item of primary[key]) {
          sql += `${item.name}, `
        }
        sql = sql.substring(0, sql.length - 2) + `);`
        createPrimary.push(sql)
      }

      //외래키 생성
      const createForeign = []
      for(let key of Object.keys(foreign)) {
        const parentKey = foreign[key]
        if(parentKey.length === 0) continue
        let tableName = ""
        let parentTable = ""
        let primaryKey = ''
        let sql = ''
        
        for(let i of parentKey) {
          sql = ''
          primaryKey = ''
          state.erdData.forEach(table => {
            if(table.idx == key) {
              tableName = table.name
            }
            if(table.idx == i) {
              parentTable = table.name
            }
          })
          if(state.relation["primaryKey"][i] !== undefined) {
            state.relation["primaryKey"][i].forEach(ele => {
              primaryKey += `${ele.name}, `
            })
          }

          primaryKey = primaryKey.substring(0, primaryKey.length - 2)
          sql = `alter table ${tableName} add constraint fk_${parentTable}_${tableName} foreign key(`
          sql += `${primaryKey})`
          sql = `${sql} references ${parentTable} (${primaryKey});`
          createForeign.push(sql)
        }
      }

      console.log(createTable)
      console.log(createPrimary)
      console.log(createForeign)
    }
  },
  actions: {
    getErdData(context) {
      context.commit('addErdData')
      context.commit('setRelation')
    }
  }
}

export default erd