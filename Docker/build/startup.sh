#!/bin/bash

echo "Waiting for database container."
/wait-for-it.sh -t 0 "$DB_HOST:$DB_PORT"

# run only once
if ! test -f "config/system/settings.php"; then
    # Install common extension
    composer req helhum/typo3-console "^8.2"

    # Install extensions from mounted extension folder
    composer req slub/dfgviewer "@dev"
    composer req kitodo/presentation "@dev"
    composer req slub/slub-digitalcollections "@dev"

    ./vendor/bin/typo3 install:fixfolderstructure

    ./vendor/bin/typo3 install:setup --no-interaction \
   --database-user-name="$DB_USER" \
   --database-user-password="$DB_PASSWORD" \
   --database-host-name="$DB_HOST" \
   --database-port="$DB_PORT" \
   --database-name="$DB_NAME" \
   --admin-user-name="$T3_NAME" \
   --admin-password="$T3_PASSWORD" \
   --site-name="DFG-Viewer" \
   --use-existing-database \
   --web-server-config="apache"

   # set base configuration
    ./vendor/bin/typo3 configuration:set 'EXTENSIONS/dlf/files/useGroupsAudio' 'AUDIO'
    ./vendor/bin/typo3 configuration:set 'EXTENSIONS/dlf/files/useGroupsVideo' 'VIDEO,DEFAULT'
    ./vendor/bin/typo3 configuration:set --json 'FE/cacheHash/requireCacheHashPresenceParameters' '["tx_dlf[id]"]'
    ./vendor/bin/typo3 configuration:set 'FE/pageNotFoundOnCHashError' 0

    # set config if environment variable is not empty
    if test ! -z "$T3_CONFIG_SYS_TRUSTEDHOSTSPATTERN"; then
        ./vendor/bin/typo3 configuration:set 'SYS/trustedHostsPattern' "$T3_CONFIG_SYS_TRUSTEDHOSTSPATTERN"
    fi
fi

exec apache2-foreground
