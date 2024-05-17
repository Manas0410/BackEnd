read -p "Enter the name of the API (e.g., Users or Account/Users): " apiName

if [[ ! $apiName =~ ^[a-zA-Z0-9/.-]+$ ]]; then
    echo "Error: Invalid name. Please use only letters, numbers, slashes, and hyphens."
    exit 1
fi

apiDir=$(echo $apiName | tr '/' '-')

if [ -d "$apiDir" ]; then
    echo "Error: The API folder already exists!"
    exit 1
fi

mkdir -p "$apiDir"
cd "$apiDir" || exit

filesToCreate=("Routes.js" "Controller.js" "Model.js" "Validation.js" "Middleware.js")

for file in "${filesToCreate[@]}"; do
    touch "${apiDir}.${file}"
done

echo "API structure created at $(pwd)"