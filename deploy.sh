#/bin/bash
# -------------------------------------------------- #
# deploys bubba front-end
# collects  front-end deploy info
# -------------------------------------------------- #

SEPARATOR='# ---------------------------------------- #'
INFOFILE=deploy-info.txt


# as user "app-user"
git pull
echo 'Submit your user name so we can keep track on you!'
read DEPLOYER
echo $SEPARATOR           >  $INFOFILE
date                      >> $INFOFILE
echo "DEPLOYER:$DEPLOYER" >> $INFOFILE
echo $SEPARATOR           >> $INFOFILE
git show HEAD | head -5   >> $INFOFILE
echo $SEPARATOR           >> $INFOFILE
chmod 664 $INFOFILE

