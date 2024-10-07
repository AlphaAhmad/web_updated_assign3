
function ComplainDescriptior() {

    return (
        <div class="mb-3">
            <label for="description" class="form-label">Complaint Description <span class="text-danger">*</span></label>
            <textarea class="form-control" id="description" name="description" rows="4" placeholder="Describe your complaint" required></textarea>
        </div>
    )
}

export default ComplainDescriptior;