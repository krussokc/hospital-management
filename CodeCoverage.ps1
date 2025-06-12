# Drop this file into the root of your repo to generate code coverage analysis reports


# Define the relative path for the results directory
$baseTestResultsPath = "TestResults"

# Combine the script's directory with the relative path
$baseTestResultsDirectory = Join-Path -Path $PSScriptRoot -ChildPath $baseTestResultsPath

if (Test-Path -Path $baseTestResultsDirectory) {
    # Clear the contents of the directory
    Get-ChildItem -Path $baseTestResultsDirectory -Recurse | Remove-Item -Recurse -Force
    Write-Output "Cleared all contents inside: $baseTestResultsDirectory"
} else {
    # Optionally, create the base directory if it does not exist
    New-Item -ItemType Directory -Path $baseTestResultsDirectory
    Write-Output "Created base directory at: $baseTestResultsDirectory"
}

# Generate a random GUID
$guid = [guid]::NewGuid().ToString()

# Combine the script's directory with the relative path
$uniqueResultDirectory = Join-Path -Path $baseTestResultsDirectory -ChildPath $guid

# Ensure the directory exists
if (-not (Test-Path -Path $uniqueResultDirectory)) {
    New-Item -ItemType Directory -Path $uniqueResultDirectory | Out-Null
}
Get-ChildItem -Recurse -Filter "*Tests.csproj" | ForEach-Object {
    dotnet test $_.FullName --logger trx --results-directory $uniqueResultDirectory --collect:"XPlat Code Coverage" --settings .runsettings
}

# Check if ReportGenerator is already installed
$reportGeneratorInstalled = dotnet tool list -g | Select-String "reportgenerator"

if (-not $reportGeneratorInstalled) {
    # ReportGenerator is not installed, proceed with installation
    dotnet tool install -g dotnet-reportgenerator-globaltool
} else {
    # ReportGenerator is already installed, output a message or handle as needed
    Write-Output "ReportGenerator is already installed."
}

# Path to the coverage report
$coverageReportPath = "**\coverage.cobertura.xml"

# Generate the HTML report
reportgenerator "-reports:$coverageReportPath" "-targetdir:$uniqueResultDirectory" -reporttypes:Html

# Optional: Open the report automatically in the default browser
Start-Process "$uniqueResultDirectory\index.html"