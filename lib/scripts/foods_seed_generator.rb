require 'rest-client'
require 'yaml'
require 'byebug'

api_keys = YAML.load_file(ENV["HOME"] + "/mysuperheropal_seed_api_keys")
api_keys.shuffle!
current_api_key = api_keys.pop

foods_list = []
counter = 0

while true
	url = current_api_key + "@api.nal.usda.gov/usda/ndb/list" 	
	params = {lt: "f", offset: counter, max: 1500, sort: "id"}
	RestClient.post(
		url, 
		params.to_json, 
		:content_type => :json, 
		:accept => :json) do |response, request, result, &block|
			byebug
			food_ids = JSON.parse(response)["list"]["item"].map { |food| food["id"] }
			if response.code == 200
				results.conact(food_ids)
				puts "results: #{foods["list"]["item"].count}"
			else
				puts "#{result.code}: #{result.message}"
			end
			break if foods["list"]["item"].empty?
	end
	counter += 1500
end

p foods_list
exit

counter = 1001
results = []

until results.count == total_entries
	until current_api_key_requests == 999				
		url = current_api_key + "@api.nal.usda.gov/usda/ndb/reports"	
		params = {ndbno: "%05d" % counter, type: "f"}
		RestClient.post(
			url, 
			params.to_json, 
			:content_type => :json, 
			:accept => :json) do |response, request, result, &block|
				if response.code == 200
					food = JSON.parse(response)
					results << food
					puts food["report"]["food"]["name"]
					puts "Successful requests: " + results.count.to_s
				elsif response.code == 429
					puts "#{result.code}: #{result.message}"
					current_api_key = api_keys.pop	
					current_api_key_requests = 0
				else
					puts "#{result.code}: #{result.message}"
				end
		end
		counter += 1;	
	end
	current_api_key_requests = 0
	current_api_key = api_keys.pop	
end

File.open(Dir.pwd + "/db/yaml/foods_raw", "w") { |file| file.write(results.to_yaml) }
