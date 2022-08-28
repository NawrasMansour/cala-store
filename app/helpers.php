<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\HtmlString;


/**
 * load vite assets
 *
 * @return HtmlString
 */
function vite_assets(): HtmlString
{
    $devServerIsRunning = false;
    $viteServerUrl = env('VITE_SERVER_URL');
    if (app()->environment('local')) {
        try {
            Http::get($viteServerUrl);
            $devServerIsRunning = true;
        } catch (\Exception $e) {
        }
    }

    if ($devServerIsRunning) {
        return new HtmlString("
            <script type=\"module\">
            import RefreshRuntime from \"$viteServerUrl/@react-refresh\"
            RefreshRuntime.injectIntoGlobalHook(window)
            window.\$RefreshReg$ = () => {}
            window.\$RefreshSig$ = () => (type) => type
            window.__vite_plugin_react_preamble_installed__ = true
            </script>
            <script type=\"module\" src=\"{$viteServerUrl}/@vite/client\"></script>
            <script type=\"module\" src=\"{$viteServerUrl}/resources/scripts/app.jsx\"></script>
        ");
    }

    $manifest = json_decode(file_get_contents(
        public_path('build/manifest.json')
    ), true);

    return new HtmlString("
        <script type=\"module\" src=\"/public/build/{$manifest['resources/scripts/app.jsx']['file']}\"></script>
        <link rel=\"stylesheet\" href=\"/public/build/{$manifest['resources/scripts/app.jsx']['css'][0]}\">
    ");
}