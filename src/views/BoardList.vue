<template>
  <div>
    <table border="1">
      <tr>
        <td>번호</td>
        <td>제목</td>
        <td>글쓴이</td>
        <td>날짜</td>
        <td>읽음</td>
      </tr>
      <tr v-for="n in list" v-bind:key="n.boardNo">
        <td>{{ n.boardNo }}</td>
        <td>{{ n.title }}</td>
        <td>{{ n.writer }}</td>
        <td>{{ n.date }}</td>
        <td>{{ n.read }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "BoardList",
  data() {
    return {
      list: [
        {
          boardNo: 10,
          title: "10 번글",
          writer: "홍길동",
          date: "20230525",
          read: 15,
        },
        {
          boardNo: 9,
          title: "9 번글",
          writer: "김길동",
          date: "20230524",
          read: 16,
        },
        {
          boardNo: 8,
          title: "8 번글",
          writer: "최길동",
          date: "20230523",
          read: 17,
        },
        {
          boardNo: 7,
          title: "7 번글",
          writer: "강길동",
          date: "20230522",
          read: 18,
        },
        {
          boardNo: 6,
          title: "6 번글",
          writer: "임길동",
          date: "20230521",
          read: 19,
        },
        {
          boardNo: 5,
          title: "5 번글",
          writer: "정길동",
          date: "20230520",
          read: 20,
        },
        {
          boardNo: 4,
          title: "4 번글",
          writer: "광길동",
          date: "20230519",
          read: 21,
        },
        {
          boardNo: 3,
          title: "3 번글",
          writer: "이길동",
          date: "20230518",
          read: 22,
        },
        {
          boardNo: 2,
          title: "2 번글",
          writer: "박길동",
          date: "20230517",
          read: 23,
        },
        {
          boardNo: 1,
          title: "1 번글",
          writer: "양길동",
          date: "20230516",
          read: 24,
        },
      ],
    };
  },
};
</script>
<style scoped>
table {
  width: 800px;
  height: 300px;
  border-collapse: collapse;
  margin: 0 auto;
}
th {
  background-color: rgb(169, 109, 109);
}
td {
  border-bottom: 1px gray solid;
}
tr:hover {
  background-color: gray;
  color: white;
}
.title {
  text-align: left;
}
#td1 {
  width: 10%;
}
#td2 {
  width: 20%;
}
</style>