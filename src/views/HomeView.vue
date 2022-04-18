<template>
    <el-container>
        <el-aside width="20%">
            <el-header style="background-color: cornflowerblue">
                <font class="fontStyle">数据筛选</font>
            </el-header>
            <div>
                <br>
                <el-upload
                    ref="upload"
                    action="/"
                    drag
                    :show-file-list="false"
                    :on-change="importExcel"
                    :auto-upload="false"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
                <br>
                <el-tag v-if="this.upSuccess">文件名：{{this.filename}}</el-tag>
<!--                <br>-->
<!--                <el-select style="width: 90%;" v-model="academy" placeholder="请选择学院" @change="getMajor">-->
<!--                    <el-option-->
<!--                        v-for="academy in academys"-->
<!--                        :key="academy"-->
<!--                        :label="academy"-->
<!--                        :value="academy">-->
<!--                    </el-option>-->
<!--                </el-select>-->
<!--                <br><br>-->
<!--                <el-select style="width: 90%" v-model="major" placeholder="请选择专业" @change="">-->
<!--                    <el-option-->
<!--                        v-for="major in majors"-->
<!--                        :key="major"-->
<!--                        :label="major"-->
<!--                        :value="major">-->
<!--                    </el-option>-->
<!--                </el-select>-->
<!--                <br><br>-->
                <el-button @click="toPage" style="width: 100px; background-color: cornflowerblue">
                    <font color="#f0f8ff">前往--></font>
                </el-button>
            </div>
        </el-aside>
        &nbsp;
        <div style="width: 80%">
            <el-header style="background-color: cornflowerblue">
                <font class="fontStyle">数据展示</font>
            </el-header>
            <div>
                <el-table
                    :data="tableData.slice((currentPage-1)*pagesize, currentPage*pagesize)"
                    height="590px"
                    :cell-style="cellStyle"
                    :header-cell-style="headercellStyle"
                    border
                    stripe
                    class="table"
                    style="width: 100%; font-size: 10px;">
                    <el-table-column
                        :fixed="index==0"
                        min-width="150px"
                        v-for="(key, item, index) in tableData[0]"
                        :key="index"
                        :prop="item"
                        :label="item">
                    </el-table-column>
                </el-table>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[15, 20, 30, 40]"
                    :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
                </el-pagination>
            </div>
        </div>
    </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as XLSX from "xlsx";

export default {
    name: 'HomeView',
    components: {
        HelloWorld
    },
    data(){
        return {
            tableData: [],
            currentPage: 1,
            pagesize: 15,
            cellStyle: {
                'border-bottom': '1px solid',
                'border-right': '1px solid',
            },
            headercellStyle: {
                'border-bottom': '1px solid',
                'border-right': '1px solid',
            },
            total: null,
            upSuccess: false,
            filename: null,
        }
    },
    created() {

    },
    methods: {
        toPage(){
            this.$router.push('/firstPage')
        },
        handleSizeChange(val) {
            this.pagesize = val
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val
            console.log(`当前页: ${val}`);
        },
        importExcel(file) {
            const _this = this
            // let file = file.files[0] // 使用传统的input方法需要加上这一步
            const types = file.name.split('.')[1]
            const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types)
            if (!fileType) {
                this.$message('格式错误！请重新选择')
                return
            }
            this.file2Xce(file).then(tabJson => {
                if (tabJson && tabJson.length > 0) {
                    this.xlsxJson = tabJson
                    // console.log(this.xlsxJson)
                    _this.tableData = this.xlsxJson[0].sheet
                    sessionStorage.setItem("data", JSON.stringify(_this.tableData))
                    _this.total = _this.tableData.length
                    _this.upSuccess = true
                    _this.filename = file.name
                }
            })
        },
        file2Xce(file) {
            return new Promise(function(resolve, reject) {
                const reader = new FileReader()
                reader.onload = function(e) {
                    const data = e.target.result
                    this.wb = XLSX.read(data, {
                        type: 'binary'
                    })
                    const result = []
                    this.wb.SheetNames.forEach((sheetName) => {
                        result.push({
                            sheetName: sheetName,
                            sheet: XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
                        })
                    })
                    resolve(result)
                }
                reader.readAsBinaryString(file.raw)
                // reader.readAsBinaryString(file) // 传统input方法
            })
        },
    }
}
</script>

<style scoped>
.fontStyle{
    color: aliceblue;
    top: 30%;
    position: relative;
}
/deep/.el-upload-dragger{
    width: 250px;
}
</style>
