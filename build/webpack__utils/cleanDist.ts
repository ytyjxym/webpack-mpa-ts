import fs from 'fs';

function cleanDist(dirPath:string){
    let dirArr = []
    // 检查文件是否存在
    if (fs.existsSync(dirPath)){
        // 读取文件夹
        dirArr = fs.readdirSync(dirPath)
        dirArr.forEach(name => {
            let newPath = dirPath + '/' + name
            // 判断子目录
            if(fs.statSync(newPath).isDirectory()){
                // 是文件夹则递归删除
                cleanDist(newPath)
            }else {
                // 否则直接删除文件
                fs.unlinkSync(newPath)
            }
        })
        // 最终删除空文件夹
        fs.rmdirSync(dirPath)
    }
}
export default cleanDist