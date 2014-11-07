require "spec_helper"

describe Vote do
  describe "relations" do
    it{should belong_to(:user)}
    it{should belong_to(:photo)}
  end
end