require 'elasticsearch/model'

class Exercise < ActiveRecord::Base
	include Elasticsearch::Model
	include Elasticsearch::Model::Callbacks
end
