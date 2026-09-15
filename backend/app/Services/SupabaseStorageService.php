<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class SupabaseStorageService
{
    protected string $url;
    protected string $key;
    protected string $bucket;

    public function __construct()
    {
        $this->url = rtrim(env('SUPABASE_URL'), '/');
        $this->key = env('SUPABASE_SERVICE_ROLE_KEY');
        $this->bucket = env('SUPABASE_STORAGE_BUCKET', 'ieee-media');
    }

    public function deleteByUrl(?string $url): bool
    {
        if (!$url) {
            return true;
        }

        $prefix = "{$this->url}/storage/v1/object/public/{$this->bucket}/";

        if (!str_starts_with($url, $prefix)) {
            return true;
        }

        $path = urldecode(substr($url, strlen($prefix)));

        return $this->delete($path);
    }

    public function delete(string $path): bool
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $this->key,
            'apikey' => $this->key,
            'Content-Type' => 'application/json',
        ])->delete(
            "{$this->url}/storage/v1/object/{$this->bucket}",
            [
                'prefixes' => [$path],
            ]
        );

        return $response->successful();
    }
}