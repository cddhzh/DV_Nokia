<template>
    <div>
        <el-header>
<!--            <el-select style="" v-model="academy" placeholder="请选择学院" @change="getMajor">-->
<!--                <el-option-->
<!--                    v-for="academy in academys"-->
<!--                    :key="academy"-->
<!--                    :label="academy"-->
<!--                    :value="academy">-->
<!--                </el-option>-->
<!--            </el-select>-->
<!--            <el-select style="" v-model="major" placeholder="请选择专业" @change="getSubject">-->
<!--                <el-option-->
<!--                    v-for="major in majors"-->
<!--                    :key="major"-->
<!--                    :label="major"-->
<!--                    :value="major">-->
<!--                </el-option>-->
<!--            </el-select>-->
<!--            <el-button @click="updateData" style="; background-color: #6495ed">-->
<!--                <font color="#f0f8ff">确认</font>-->
<!--            </el-button>-->
        </el-header>
        <div style="height: 640px">
            <div v-if="fresh" style="width: 29%; height: 55%; background-color: #6495ed; display: inline-block"></div>
            &nbsp;
            <div v-if="fresh" ref="" style="width: 40%; height: 55%; background-color: #6495ed; display: inline-block"></div>
            &nbsp;
            <div v-if="fresh" ref="" style="width: 29%; height: 55%; background-color: #6495ed; display: inline-block"></div>
            <div v-if="fresh" ref="" style="width: 49%; height: 45%; background-color: #6495ed; display: inline-block"></div>
            &nbsp;
            <div v-if="fresh" ref="" style="width: 49%; height: 45%; background-color: #6495ed; display: inline-block"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FirstPage",
    data(){
        return {
            fresh: true,
            tableData : JSON.parse(sessionStorage.getItem("data")),
        }
    },
    created() {

    },
    methods:{

    }
}
</script>

<style scoped>

</style>