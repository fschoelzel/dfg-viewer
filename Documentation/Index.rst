.. include:: Includes.txt

=============
Documentation
=============

The following document holds information about the installation of the *TYPO3
dfgviewer* extension.

Installation
============

The current release 7.0 may be used with TYPO3 11.5 or TYPO3 12.4 LTS.

The extension is based on `Kitodo.Presentation (dlf) <https://github.com/kitodo/kitodo-presentation>`_ and `SLUB DigitalCollections (slub_digitalcollections)
<https://github.com/slub/slub_digitalcollections>`. Before you can start to
use the *DFG Viewer (dfgviewer)* in your TYPO3 installation, you have to install
both extensions. The installation is only supported via Composer.
Kitodo.Presentation will be installed and configured automatically.

System Requirements
-------------------
Depending on the TYPO3 version, there are different system requirements which are linked here accordingly.

* TYPO3 12 https://get.typo3.org/version/12
* TYPO3 11 https://get.typo3.org/version/11

For the system we recommend at least:
* CPU: 1
* Memory: 2 GB
* Disk: 20 GB

Install a fresh TYPO3 12.4 LTS
-----------------------------

To install a fresh TYPO3 12.4 system, try the following installation procedure with composer::

    # Assuming the following settings:
    #   * the installation directory is /var/www/dfgviewer
    #   * the Apache DocumentRoot is /var/www/dfgviewer/public
    #   * Apache is running as user www-data with group www-data
    #   * execution of all following commands as user www-data
    cd /var/www/
    # remove /var/www/dfgviewer if it already exists or make sure it's really empty by ls -la dfgviewer/
    rm -r dfgviewer/
    # load full TYPO3 via composer
    composer create-project typo3/cms-base-distribution:^12 dfgviewer
    # Install the TYPO3 system with the TYPO3-console
    cd dfgviewer/
    ./vendor/bin/typo3 setup

Instead of using the TYPO3-console, you can you can switch to the web-based installation of TYPO3 in your
browser. Just follow the 4 steps. You need your MySQL/MariaDB credentials of course.::

    # continue with installation via webbrowser
    http://example.com/
    1. Step: "System environment"
    2. Step: "Database connection"
    3. Step: "Select database" --> Best is to create the database and user before.
    4. Step: "Create admin user account"
    5. Step: "Installation done!" --> Select "Do nothing, just get me to the Backend."
    # Test your backend login:
    http://example.com/typo3/

The DFG-Viewer extension assumes the default language is German (&L=0). An
additionial "website-language" English (&L=1) will be created automatically on
installing the DFG-Viewer extension. This is only relevant for localization of
the metadata and structures labels.

Recommended Steps after Installation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Go to the language module and install "German" as backend language.
2. [optional] Change the backend language in your user settings to German.
3. Go to the Install Tool --> All Configurations and change the default settings of pageNotFoundOnCHashError to '0'.

Your *config/system/settings.php* () must contain this::

  'FE' => [
          'pageNotFoundOnCHashError' => false,
  ],

You can set this easily with the TYPO3-console::

    ./vendor/bin/typo3 configuration:set 'FE/pageNotFoundOnCHashError' 0

Now you have a working TYPO3 12.4 LTS installation and you can continue with composer
to install DFG-Viewer extension.


Install DFG-Viewer and Kitodo.Presentation via Composer
-------------------------------------------------------

    composer require slub/dfgviewer:^7.0

This will install the DFG-Viewer 7.0 extension and Kitodo.Presentation 5.1 from
`Packagist <https://github.com/slub/dfg-viewer>`_.

Optionally configure the extension via TYPO3 Console::

    # Install TYPO3 Console
    composer req helhum/typo3-console:^8.2

    ./vendor/bin/typo3 install:extensionsetupifpossible

During the installation, three pages will be created: a root page, the "Kitodo
Configuration" folder and the viewer itself.

Configure DFG-Viewer and Kitodo.Presentation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The DFG-Viewer is almost configured. Only the Page-ID-constants have to be
checked and adjusted. Go to the template module and use the constant editor to
fit your installation.

Success
-------

Now your installation should work. You can test this with the following url
(replace *host* and *id* with the parameters of your installation):

http://example.com/index.php?tx_dlf%5Bid%5D=https%3A%2F%2Fdigital.slub-dresden.de%2Foai%2F%3Fverb%3DGetRecord%26metadataPrefix%3Dmets%26identifier%3Doai%3Ade%3Aslub-dresden%3Adb%3Aid-263566811

To pass a document to the viewer, use the tx_dlf[id] GET parameter. Don't forget to urlencode the value.::

    &tx_dlf[id]=https%3A%2F%2Fdigital.slub-dresden.de%2Foai%2F%3Fverb%3DGetRecord%26metadataPrefix%3Dmets%26identifier%3Doai%3Ade%3Aslub-dresden%3Adb%3Aid-263566811

Known Problems
--------------

404 - Page Not Found
~~~~~~~~~~~~~~~~~~~~

If you get a "404 - Page Not Found" error on calling the viewer you are missing
the following configuration in *config/system/settings.php*::

    'FE' => [
        'pageNotFoundOnCHashError' => false,
    ],

Background is the parameter you pass with :code:`tx_dlf[id]` contains no cHash.
The default behaviour of TYPO3 is to throw an 404 exception. As it is impossible
to calculate the cHash from outside the TYPO3 system, we have to disable this
security feature by the setting above.

This will cause now an uncached delivery of the viewer page.

Empty Viewer Page
~~~~~~~~~~~~~~~~~

You may notice from time to time, the viewer page keeps empty even though you
pass the :code:`tx_dlf[id]` parameter.

This happens, if someone called the viewer page without any parameters. In this
case, TYPO3 saves the page to its cache. If you call the viewer page again with
any parameter and without a cHash, the (empty) cached page is delivered.

To avoid this, you must configure :code:`tx_dlf[id]` to require a cHash. Of
course this is impossible to achieve so the system will process the page uncached.

Add this setting to your *config/system/settings.php*::

    'FE' => [
        'cacheHash' => [
            'requireCacheHashPresenceParameters' => [
                'tx_dlf[id]',
                'set[mets]',
            ],
        ],
    ]

Tip: Use the admin backend module: Settings -> Configure Installation-Wide Options

Re-Install the DFG-Viewer extension
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you want to reinstall the DFG-Viewer extension, the metadata and structure
records won't be created a second time. To force this, you have to delete the
entry in table 'sys_registry'.

Contact and Issues
------------------

The source-code is hosted at GitHub: `slub/dfg-viewer <https://github.com/slub/dfg-viewer>`_.
Please use the issue tracker to report errors or feature requests.

You may contact us by email to typo3@slub-dresden.de.
