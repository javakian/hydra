(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{37:function(e){e.exports=JSON.parse('{"docs":{"getting_started":{"id":"getting_started","title":"Getting started","sidebar_label":"Getting started","description":"### Requirements","source":"@site/docs/getting_started.md","permalink":"/docs/getting_started","sidebar":"Docs","category":"About","next":"examples/minimal","previous":"intro","previous_title":"Introduction","next_title":"Minimal example"},"intro":{"id":"intro","title":"Introduction","sidebar_label":"Introduction","description":"Hydra is a framework for writing flexible command line applications.","source":"@site/docs/intro.md","permalink":"/docs/intro","sidebar":"Docs","category":"About","next":"getting_started","next_title":"Getting started"},"advanced/plugins":{"id":"advanced/plugins","title":"Hydra plugins","sidebar_label":"Hydra plugins","description":"Hydra has a plugin architecture.","source":"@site/docs/advanced/plugins.md","permalink":"/docs/advanced/plugins","sidebar":"Docs","category":"Advanced","next":"development/contributing","previous":"advanced/search_path","previous_title":"Config search path","next_title":"Contributing"},"advanced/search_path":{"id":"advanced/search_path","title":"Config search path","sidebar_label":"Config search path","description":"Hydra uses a search path approach to find configuration files as it composes your configuration object.","source":"@site/docs/advanced/search_path.md","permalink":"/docs/advanced/search_path","sidebar":"Docs","category":"Advanced","next":"advanced/plugins","previous":"configure_hydra/workdir","previous_title":"Customizing working directory pattern","next_title":"Hydra plugins"},"configure_hydra/intro":{"id":"configure_hydra/intro","title":"Overview","sidebar_label":"Introduction","description":"## Hydra config","source":"@site/docs/configure_hydra/Intro.md","permalink":"/docs/configure_hydra/intro","sidebar":"Docs","category":"Configuring Hydra","next":"configure_hydra/hydra_config","previous":"deployment/app_packaging","previous_title":"Application packaging","next_title":"Hydra configuration"},"configure_hydra/hydra_config":{"id":"configure_hydra/hydra_config","title":"Hydra configuration","sidebar_label":"Hydra configuration","description":"Anything under the hydra branch of the config can be overridden in various ways.","source":"@site/docs/configure_hydra/hydra_config.md","permalink":"/docs/configure_hydra/hydra_config","sidebar":"Docs","category":"Configuring Hydra","next":"configure_hydra/logging","previous":"configure_hydra/intro","previous_title":"Overview","next_title":"Customizing logging"},"configure_hydra/logging":{"id":"configure_hydra/logging","title":"Customizing logging","sidebar_label":"Customizing logging","description":"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it [here](https://docs.python.org/3/howto/logging.html).","source":"@site/docs/configure_hydra/logging.md","permalink":"/docs/configure_hydra/logging","sidebar":"Docs","category":"Configuring Hydra","next":"configure_hydra/workdir","previous":"configure_hydra/hydra_config","previous_title":"Hydra configuration","next_title":"Customizing working directory pattern"},"configure_hydra/workdir":{"id":"configure_hydra/workdir","title":"Customizing working directory pattern","sidebar_label":"Customizing working directory pattern","description":"See the [intro](intro) for details about how to apply the customization.","source":"@site/docs/configure_hydra/workdir.md","permalink":"/docs/configure_hydra/workdir","sidebar":"Docs","category":"Configuring Hydra","next":"advanced/search_path","previous":"configure_hydra/logging","previous_title":"Customizing logging","next_title":"Config search path"},"development/contributing":{"id":"development/contributing","title":"Contributing","sidebar_label":"Contributing","description":"This guide assumes you have forked and checked-out the repository.","source":"@site/docs/development/contributing.md","permalink":"/docs/development/contributing","sidebar":"Docs","category":"Development","next":"development/release","previous":"advanced/plugins","previous_title":"Hydra plugins","next_title":"Release process"},"deployment/app_packaging":{"id":"deployment/app_packaging","title":"Application packaging","sidebar_label":"Application packaging","description":"You can package your Hydra app along with your configuration.","source":"@site/docs/deployment/packaging.md","permalink":"/docs/deployment/app_packaging","sidebar":"Docs","category":"Deployment","next":"configure_hydra/intro","previous":"examples/specializing_config","previous_title":"Specializing configuration","next_title":"Overview"},"development/release":{"id":"development/release","title":"Release process","sidebar_label":"Release process","description":"The release process is work in progress and will be automated in the future.","source":"@site/docs/development/release.md","permalink":"/docs/development/release","sidebar":"Docs","category":"Development","previous":"development/contributing","previous_title":"Contributing"},"examples/config_file":{"id":"examples/config_file","title":"Config file","sidebar_label":"Config file","description":"Your app evolves, and you now want to use a configuration file to make things more manageable:","source":"@site/docs/examples/config_file.md","permalink":"/docs/examples/config_file","sidebar":"Docs","category":"Basic usage","next":"examples/config_splitting","previous":"examples/logging","previous_title":"Python logging","next_title":"Splitting a configuration file"},"examples/config_groups":{"id":"examples/config_groups","title":"Config groups","sidebar_label":"Config groups","description":"As you continue experimenting, you realize you want to try several different optimizers.","source":"@site/docs/examples/config_groups.md","permalink":"/docs/examples/config_groups","sidebar":"Docs","category":"Basic usage","next":"examples/multi-run","previous":"examples/config_splitting","previous_title":"Splitting a configuration file","next_title":"Multi-run"},"examples/config_splitting":{"id":"examples/config_splitting","title":"Splitting a configuration file","sidebar_label":"Splitting a configuration file","description":"As your configuration becomes more complex, you may want to split it into multiple files instead of adding to an ever","source":"@site/docs/examples/config_splitting.md","permalink":"/docs/examples/config_splitting","sidebar":"Docs","category":"Basic usage","next":"examples/config_groups","previous":"examples/config_file","previous_title":"Config file","next_title":"Config groups"},"examples/logging":{"id":"examples/logging","title":"Python logging","sidebar_label":"Python logging","description":"Hydra configures Python logging for your app.","source":"@site/docs/examples/logging.md","permalink":"/docs/examples/logging","sidebar":"Docs","category":"Basic usage","next":"examples/config_file","previous":"examples/working_directory","previous_title":"Working directory","next_title":"Config file"},"examples/minimal":{"id":"examples/minimal","title":"Minimal example","sidebar_label":"Minimal example","description":"This is a minimal example of a Hydra app.","source":"@site/docs/examples/minimal.md","permalink":"/docs/examples/minimal","sidebar":"Docs","category":"Basic usage","next":"examples/working_directory","previous":"getting_started","previous_title":"Getting started","next_title":"Working directory"},"examples/multi-run":{"id":"examples/multi-run","title":"Multi-run","sidebar_label":"Multi-run example","description":"Hydra can run the same job multiple time with different arguments in each run using a mode called multirun.","source":"@site/docs/examples/multirun.md","permalink":"/docs/examples/multi-run","sidebar":"Docs","category":"Basic usage","next":"examples/tab_completion","previous":"examples/config_groups","previous_title":"Config groups","next_title":"Tab completion"},"examples/objects":{"id":"examples/objects","title":"Creating objects","sidebar_label":"Creating objects","description":"A common pattern is to instantiate different types of objects based on the configuration, potentially passing different arguments to object.","source":"@site/docs/examples/objects.md","permalink":"/docs/examples/objects","sidebar":"Docs","category":"Common patterns","next":"examples/specializing_config","previous":"examples/tab_completion","previous_title":"Tab completion","next_title":"Specializing configuration"},"examples/specializing_config":{"id":"examples/specializing_config","title":"Specializing configuration","sidebar_label":"Specializing configuration","description":"In some cases the desired configuration should depend on other configuraiton choices.","source":"@site/docs/examples/specializing_config.md","permalink":"/docs/examples/specializing_config","sidebar":"Docs","category":"Common patterns","next":"deployment/app_packaging","previous":"examples/objects","previous_title":"Creating objects","next_title":"Application packaging"},"examples/tab_completion":{"id":"examples/tab_completion","title":"Tab completion","sidebar_label":"Tab completion","description":"You can enable shell TAB completion ","source":"@site/docs/examples/tab_completion.md","permalink":"/docs/examples/tab_completion","sidebar":"Docs","category":"Basic usage","next":"examples/objects","previous":"examples/multi-run","previous_title":"Multi-run","next_title":"Creating objects"},"examples/working_directory":{"id":"examples/working_directory","title":"Working directory","sidebar_label":"Working directory","description":"Hydra manages the working directory for your app.","source":"@site/docs/examples/working_directory.md","permalink":"/docs/examples/working_directory","sidebar":"Docs","category":"Basic usage","next":"examples/logging","previous":"examples/minimal","previous_title":"Minimal example","next_title":"Python logging"}},"docsDir":"/home/circleci/project/website/docs","docsSidebars":{"Docs":[{"type":"category","label":"About","items":[{"type":"doc","id":"intro"},{"type":"doc","id":"getting_started"}]},{"type":"category","label":"Basic usage","items":[{"type":"doc","id":"examples/minimal"},{"type":"doc","id":"examples/working_directory"},{"type":"doc","id":"examples/logging"},{"type":"doc","id":"examples/config_file"},{"type":"doc","id":"examples/config_splitting"},{"type":"doc","id":"examples/config_groups"},{"type":"doc","id":"examples/multi-run"},{"type":"doc","id":"examples/tab_completion"}]},{"type":"category","label":"Common patterns","items":[{"type":"doc","id":"examples/objects"},{"type":"doc","id":"examples/specializing_config"}]},{"type":"category","label":"Deployment","items":[{"type":"doc","id":"deployment/app_packaging"}]},{"type":"category","label":"Configuring Hydra","items":[{"type":"doc","id":"configure_hydra/intro"},{"type":"doc","id":"configure_hydra/hydra_config"},{"type":"doc","id":"configure_hydra/logging"},{"type":"doc","id":"configure_hydra/workdir"}]},{"type":"category","label":"Advanced","items":[{"type":"doc","id":"advanced/search_path"},{"type":"doc","id":"advanced/plugins"}]},{"type":"category","label":"Development","items":[{"type":"doc","id":"development/contributing"},{"type":"doc","id":"development/release"}]}]},"sourceToPermalink":{"@site/docs/getting_started.md":"/docs/getting_started","@site/docs/intro.md":"/docs/intro","@site/docs/advanced/plugins.md":"/docs/advanced/plugins","@site/docs/advanced/search_path.md":"/docs/advanced/search_path","@site/docs/configure_hydra/Intro.md":"/docs/configure_hydra/intro","@site/docs/configure_hydra/hydra_config.md":"/docs/configure_hydra/hydra_config","@site/docs/configure_hydra/logging.md":"/docs/configure_hydra/logging","@site/docs/configure_hydra/workdir.md":"/docs/configure_hydra/workdir","@site/docs/development/contributing.md":"/docs/development/contributing","@site/docs/deployment/packaging.md":"/docs/deployment/app_packaging","@site/docs/development/release.md":"/docs/development/release","@site/docs/examples/config_file.md":"/docs/examples/config_file","@site/docs/examples/config_groups.md":"/docs/examples/config_groups","@site/docs/examples/config_splitting.md":"/docs/examples/config_splitting","@site/docs/examples/logging.md":"/docs/examples/logging","@site/docs/examples/minimal.md":"/docs/examples/minimal","@site/docs/examples/multirun.md":"/docs/examples/multi-run","@site/docs/examples/objects.md":"/docs/examples/objects","@site/docs/examples/specializing_config.md":"/docs/examples/specializing_config","@site/docs/examples/tab_completion.md":"/docs/examples/tab_completion","@site/docs/examples/working_directory.md":"/docs/examples/working_directory"},"permalinkToId":{"/docs/getting_started":"getting_started","/docs/intro":"intro","/docs/advanced/plugins":"advanced/plugins","/docs/advanced/search_path":"advanced/search_path","/docs/configure_hydra/intro":"configure_hydra/intro","/docs/configure_hydra/hydra_config":"configure_hydra/hydra_config","/docs/configure_hydra/logging":"configure_hydra/logging","/docs/configure_hydra/workdir":"configure_hydra/workdir","/docs/development/contributing":"development/contributing","/docs/deployment/app_packaging":"deployment/app_packaging","/docs/development/release":"development/release","/docs/examples/config_file":"examples/config_file","/docs/examples/config_groups":"examples/config_groups","/docs/examples/config_splitting":"examples/config_splitting","/docs/examples/logging":"examples/logging","/docs/examples/minimal":"examples/minimal","/docs/examples/multi-run":"examples/multi-run","/docs/examples/objects":"examples/objects","/docs/examples/specializing_config":"examples/specializing_config","/docs/examples/tab_completion":"examples/tab_completion","/docs/examples/working_directory":"examples/working_directory"}}')}}]);