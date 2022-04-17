from os import environ
from dynaconf import Dynaconf


settings = Dynaconf(
    envvar_prefix="DYNACONF",
    environments=True,
    settings_files=[
        '/home/anmark/projects/DaSHI-Business-Card-Website/backend/backend/config/settings.yaml', 
        '.secrets.yaml'
    ],
)

# `envvar_prefix` = export envvars with `export DYNACONF_FOO=bar`.
# `settings_files` = Load these files in the order.
