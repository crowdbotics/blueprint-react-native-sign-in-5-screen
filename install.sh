#!/bin/bash

# Initialize basic vars and helpers
source blueprint-lib/init.sh

##
# Add dependencies here
##

# source blueprint-lib/docker.sh

##
# ADD BLUEPRINT CODE BELOW HERE
#
# BASE_PATH is the full path to the project root
# APP_NAME is the name of the Django app that will be modified
##

BLUEPRINT="$3"
NAME="$4"

if [ -z "$BLUEPRINT" ]
then
    BLUEPRINT="SignIn05Blueprint"
fi

if [ -z "$NAME" ] 
then
    NAME="SignIn 5"
fi

EXT_POINT_1="@BlueprintInsertion"
EXT_POINT_2="@BlueprintImportInsertion"
EXT_POINT_3="@BlueprintNavigationInsertion"
DATA_1="{ name: '${BLUEPRINT}', human_name: '${NAME}', access_route: '${BLUEPRINT}'},"
DATA_2="import ${BLUEPRINT}Navigator from '..\/features\/${BLUEPRINT}\/navigator';"
DATA_3="${BLUEPRINT}: { screen: ${BLUEPRINT}Navigator },"

echo "create blueprint folder"
mkdir -p $BASE_PATH/src/features/$BLUEPRINT

echo "copy"
cp -r ./SignIn05Blueprint/. $BASE_PATH/src/features/$BLUEPRINT

echo ">> insert 1" 
sed -i "s/${EXT_POINT_1}/&\n${DATA_1}/g" $BASE_PATH/src/config/installed_blueprints.js


echo ">> insert 2"
sed -i "s/${EXT_POINT_2}/&\n${DATA_2}/g" $BASE_PATH/src/navigator/mainNavigator.js

echo ">> insert 3"
sed -i "s/${EXT_POINT_3}/&\n${DATA_3}/g" $BASE_PATH/src/navigator/mainNavigator.js

EXT_POINT_5="@BlueprintReduxImportInsertion"
EXT_POINT_6="@BlueprintReduxCombineInsertion"
DATA_5="import { ${BLUEPRINT}Reducer } from '..\/features\/${BLUEPRINT}\/redux\/reducers'"
DATA_6="${BLUEPRINT}: ${BLUEPRINT}Reducer,"

echo ">> insert 5"
sed -i "s/${EXT_POINT_5}/&\n${DATA_5}/g" $BASE_PATH/src/redux/mainReducer.js

echo ">> insert 6"
sed -i "s/${EXT_POINT_6}/&\n${DATA_6}/g" $BASE_PATH/src/redux/mainReducer.js

EXT_POINT_7="@BlueprintReduxImportInsertion"
EXT_POINT_8="@BlueprintReduxCombineInsertion"
DATA_7="import ${BLUEPRINT}Saga from '..\/features\/Dashboard1Blueprint\/redux\/sagas'"
DATA_8="${BLUEPRINT}Saga,"

echo ">> insert 7"
sed -i "s/${EXT_POINT_7}/&\n${DATA_7}/g" $BASE_PATH/src/redux/mainSaga.js

echo ">> insert 8"
sed -i "s/${EXT_POINT_8}/&\n${DATA_8}/g" $BASE_PATH/src/redux/mainSaga.js