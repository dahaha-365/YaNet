# mihomo-run-as-admin.ps1
# 跑纯核心的 powershell 脚本

# 检查当前是否以管理员权限运行
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    # 未以管理员权限运行，重新启动脚本并请求提升权限
    Start-Process powershell.exe -ArgumentList "-ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs
    exit
}

# 已获得管理员权限，执行目标程序
Set-Location -Path (Split-Path -Parent $MyInvocation.MyCommand.Definition)
& .\mihomo.exe -d ./profile
