require 'rest-client'
require 'yaml'

api_keys = YAML.load_file(ENV["HOME"] + "/mysuperheropal_seed_api_keys")
current_api_key = api_keys.pop
current_api_key_requests = 0;
successful_requests = 0;
#total_entries = 8617;
total_entries = 10;
counter = 1001
results = []

until successful_requests == total_entries
	until current_api_key_requests == 999				
		url = current_api_key + "@api.nal.usda.gov/usda/ndb/reports"	
		params = {ndbno: "%05d" % counter, type: "f"}
		RestClient.post(
			url, 
			params.to_json, 
			:content_type => :json, 
			:accept => :json) do |response, request, result, &block|
				if response.code == 200
					results << JSON.parse(response)
					successful_requests += 1
					if successful_requests == 10
						File.open(Dir.pwd + "/db/yaml/foods_raw", "w") { |file| file.write(results.to_yaml) }
						exit
					end
				else
					response.return!(request, result, &block)
				end
		end
		counter += 1;	
	end
	current_api_key_requests = 0
	current_api_key = api_keys.pop	
end

File.open(Dir.pwd + "/db/yaml/foods_raw", "w") { |file| file.write(results.to_yaml) }
