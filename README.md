# Buildbot tags section plugin

The plugin adds a section to the side menu with pre-prepared builders filters by tags.

## Developing

1. Place plugin directories (`build_common` and `tags_section_plugin`) to the `master/www/` directory
2. Install python package `buildbot_pkg`
3. Install dependencies via `yarn install`
4. Execute `yarn link` (in the `build_common` directory)
5. Execute `yarn link buildbot-build-common` (in the `tags_section_plugin` directory)
6. Compile plugin via `pip3 install -e .` in the `tags_section_plugin` directory
7. Configure plugin in the `master/master.py` file:
    ```python
        c['www'] = dict(
            ...
            plugins=dict(
                ...
                tags_section_plugin={
                    "sections": [
                        {
                            "name": "MDBE",
                            "filters": [
                                {"name": "Only build", "tags": ["+build", "-test"]},
                                {"name": "Only test", "tags": ["-build", "+test"]}
                            ],
                        },
                        {
                            "name": "MaxScale",
                            "filters": [
                                {"name": "Only build", "tags": ["+build", "-test"]},
                                {"name": "Only test", "tags": ["-build", "+test"]}
                            ],
                        }
                    ],
                }
            )
        )
    ```
8. Reconfigure BuildBot

After any changes to the plugin code, you need to run the `pip3 install -e .` command to recompile the plugin and apply the changes.

Get more information about plugin usage and distribution at [README](tags_section_plugin/README.md)